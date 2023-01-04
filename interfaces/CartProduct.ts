export interface ICartProduct {
  _id: string;
  description: string;
  image: string;
  inStock: number;
  colors: Colors[];
  price: number;
  size?: string;
  slug: string;
  tags: string;
  title: string;
  type: IType;
  gender: 'best_sellers' | 'news' | 'sale';
  quantity: number;
}

interface Colors {
  url: string;
}

type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
type IType = 'top' | 'bottom' | 'one-pices' | 'set';