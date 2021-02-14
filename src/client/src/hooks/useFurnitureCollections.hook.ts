import { useAtom } from 'jotai';

import { fetchFurnitureCollectionsAtom } from '../storeAtom/furniture.atom';
import { FurnitureCollections } from '../types/furniture.types';

export function useFurnitureCollections(): FurnitureCollections | null {
  const [furnitureCollections, fetch] = useAtom(fetchFurnitureCollectionsAtom);
  !furnitureCollections && fetch();

  return furnitureCollections;
}
