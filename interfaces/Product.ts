import { IReview } from "./Review";

export interface IProduct {
  _id: string;
  quantity?: number;
  description: string;
  images: Image[];
  colors: Colors[];
  inStock: number;
  price: number;
  reviews: IReview[];
  rating: number;
  sizes: ISize[];
  slug: string;
  tags: string;
  title: string;
  type: IType;
  gender: 'best_sellers' | 'news' | 'sale';
  createdAt?: Date;
  updatedAt?: Date;
}

interface Colors {
  url: string;
}

interface Image {
  url: string;
}

export type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
export type IType = 'top' | 'bottom' | 'one-pices' | 'set';

