export enum SizeTypeVariant {
    ml="мл",
    gr="г"
}

export interface ItemDataType {
    id: number;
    src: string;
    title: string;
    sizeType: SizeTypeVariant
    size: number | string;
    barcode: number;
    producer: string;
    brand: string;
    description: string;
    price: number;
    category: string[]
  }

  export interface basketItem {
    item: ItemDataType,
    count: number,
}

export enum SortTypeVariant {
  nameA = 'nameAscending',
  nameZ = 'nameDescending',
  price0 = 'priceAscending',
  price1 = 'priceDescending',
}

export enum CategoryVariant {
  all = 'Все',
  body = 'Уход за телом',
  hand = 'Уход за руками',
  legs = 'Уход за ногами',
  face = 'Уход за лицом',
  hair = 'Уход за волосами',
  sunscreen = 'Средства для загара',
  shave = 'Средства для бритья',
  presentBox = 'Подарочные наборы',
  hygiene = 'Гигиеническая продукция',
  mouth = 'Гигиена полости рта',
  paper = 'Бумажная продукция'
}