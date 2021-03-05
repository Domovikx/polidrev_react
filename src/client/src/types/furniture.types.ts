export enum Dimensions {
  length = 'length',
  width = 'width',
  height = 'height',
}

export interface Furniture {
  collection: string;
  idxArr: number;
  cost: number | null;
  description: string;
  id: string | number;
  images: string[];
  lot: string;
  miniDescription: string;
  tittle: string;

  options: {
    dimensions: {
      length: number;
      width: number;
      height: number;
    };

    dimensions2: {
      length: number;
      width: number;
      height: number;
    };

    sleepingArea: {
      length: number;
      width: number;
      height: number;
    };

    seat: {
      height: number;
      depth: number;
    };

    deliveryOption: string; // Вариант доставки
    carcass: string; // Каркас

    pillowFilling: string; // Наполнение подушек
    laundryBox: boolean; // Бельевой ящик
    decorativePillows: boolean; // Декоративные подушки

    upholstery: string; // Обивочный материал

    correspond: string; // Изделие соответствует
    mechanism: string; // Механизм раскладки
    softElements: string; // Мягкие элементы
  };
}

export interface FurnitureCollections {
  [key: string]: Furniture[];
}

export interface CollectionsById {
  [key: string]: Furniture;
}
