export interface ICartProduct {
  _id: string;
  description: string;
  discountCode?: IDiscountCode | null;
  image: string;
  inStock: number;
  price: number;
  topSize?: string;
  bottomSize?: string;
  slug: string;
  tags: string;
  title: string;
  type: IType;
  gender: 'best_sellers' | 'news' | 'sale';
  quantity: number;
  customization: string;
}

interface IDiscountCode {
  discount: string;
  discoutCode: string
}

type ISize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'
type IType = 'top' | 'bottom' | 'one-pices' | 'set';