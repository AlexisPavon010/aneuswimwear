import { IUser } from "./User";

export interface IOrder {
  // _id?: string;
  discountCode?: IDiscountCode | null;
  user?: IUser | string;
  orderItems: IOrderItems[]
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  numberOfItems: number;
  subTotal: number;
  total: number;
  tax: number;
  isPaid: boolean;
  paidAt?: string;
  transactionID?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface IDiscountCode {
  discount: string;
  couponCode: string
}

export interface IOrderItems {
  _id: string;
  title: string;
  size: string;
  quantity: number;
  slug: string;
  image: string;
  price: number;
  gender: string;
}

export interface ShippingAddress {
  country: string;
  firsName: string;
  lastName: string;
  address: string;
  address2: string;
  zip: string;
  city: string;
  phone: string;
}