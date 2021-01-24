export interface FurnitureCollection {
  cost: number | null;
  description: string;
  id: string;
  images: string[];
  lot: string;
  miniDescription: string;
  tittle: string;
}

export interface FurnitureCollections {
  bench: FurnitureCollection[];
  'chair-bed': FurnitureCollection[];
  'corner-sofa': FurnitureCollection[];
  settle: FurnitureCollection[];
  'sofa-bed': FurnitureCollection[];
}

export interface CollectionsById {
  [key: string]: {
    collectionName: string;
    cost: number | null;
    description: string;
    id: string;
    images: string[];
    lot: string;
    miniDescription: string;
    tittle: string;
  };
}
