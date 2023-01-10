import { createSlice } from "@reduxjs/toolkit";
import { parseCookies, setCookie } from 'nookies'

import { ICartProduct, IDiscountCode } from "../../interfaces";

const { cart } = parseCookies()

interface initialStateProps {
  items: any[]
  discount?: IDiscountCode | null
}

const initialState: initialStateProps = {
  items: cart ? JSON.parse(cart) : [],
  discount: null
}

export const getCartTotal = (cart: any, discount?: number) => discount
  ? cart?.reduce((amount: number, item: ICartProduct) => item.price * item.quantity + amount, 0).toFixed(2) - ((Number(discount) / 100) * cart?.reduce((amount: number, item: ICartProduct) => item.price * item.quantity + amount, 0).toFixed(2))
  : cart?.reduce((amount: number, item: ICartProduct) => item.price * item.quantity + amount, 0).toFixed(2)

export const getTotalItems = (cart: any) =>
  cart?.reduce((total: number, item: ICartProduct) => item.quantity + total, 0);

export const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      return {
        ...state.items,
        items: [...payload],
      };
    },
    RemoveFroToCart(state, { payload }) {
      return {
        ...state.items,
        items: state.items.filter((product) => !(product._id === payload._id && product.size === payload.size))
      }
    },
    incrementQuantity(state, { payload }) {
      return {
        ...state.items,
        items: state.items.map(product => {
          if (product._id !== payload._id) return product;
          if (product.size !== payload.size) return product;
          product = payload;
          return product;
        })
      }
    },
    decrementQuantity(state, { payload }) {
      return {
        ...state.items,
        items: state.items.map(product => {
          if (product._id !== payload._id) return product;
          if (product.size !== payload.size) return product;
          product = payload;
          return product;
        })
      }
    },
    RemoveAllItems: (state) => {
      state.items = []
      // localStorage.removeItem("cart");
    },
    setDiscoutCode: (state, { payload }) => {
        state.items.push(payload)
    }
  }
})

export const {
  addToCart,
  RemoveFroToCart,
  incrementQuantity,
  decrementQuantity,
  RemoveAllItems,
  setDiscoutCode
} = cartSlices.actions;