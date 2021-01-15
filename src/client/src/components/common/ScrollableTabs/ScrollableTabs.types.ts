import { SoftFurnitureCollections } from '../../../pages/SoftFurniture/SoftFurniture.types';

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export interface ScrollableTabsProps {
  collections?: SoftFurnitureCollections;
}
