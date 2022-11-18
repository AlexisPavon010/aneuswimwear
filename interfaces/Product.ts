export interface IProduct {
  _id: string;
  quantity?: number;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ISize[];
  slug: string;
  tags: string;
  title: string;
  type: IType;
  gender: 'men' | 'women' | 'kid' | 'unisex';
  createdAt?: Date;
  updatedAt?: Date;
}

export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
export type IType = 'shirts' | 'pants' | 'hoodies' | 'hats' | 'tops' | 'bottom' | 'one-pices' | 'new' | 'sale';

