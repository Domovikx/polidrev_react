import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/root.reducer';
import { Furniture } from '../types/furniture.types';

export const useFurniture = (
  furnitureId: string | number,
): {
  furniture: Furniture;
  setFurniture: Dispatch<SetStateAction<Furniture>>;
} => {
  const furnitureStore = useSelector(
    (state: RootState) =>
      state.furnitureCollections.furnitureCollectionsById[furnitureId],
  );
  const [furniture, setFurniture] = useState(furnitureStore);

  useEffect(() => {
    setFurniture(furnitureStore);
  }, [furnitureStore]);

  return { furniture, setFurniture };
};
