export interface ICartProduct {
  _id: string;
  description: string;
  image: string;
  inStock: number;
  color: number[];
  price: number;
  size?: string;
  slug: string;
  tags: string;
  title: string;
  type: IType;
  gender: 'men' | 'women' | 'kid' | 'unisex';
  quantity: number;
}

export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
export type IType = 'shirts' | 'pants' | 'hoodies' | 'hats' | 'new' | 'bottom' | 'tops' | 'one-pices' | 'sale';