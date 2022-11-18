import { createSlice } from "@reduxjs/toolkit";
import { parseCookies, setCookie } from 'nookies'

import { ICartProduct } from "../../interfaces";

const { cart } = parseCookies()

interface initialStateProps {
  items: ICartProduct[]
}

const initialState: initialStateProps = {
  items: cart ? JSON.parse(cart) : []
}


export const getCartTotal = (cart: any) =>
  cart?.reduce((amount: number, item: ICartProduct) => item.price * item.quantity + amount, 0)
    .toFixed(2);

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
    }
  },
})

export const { addToCart, RemoveFroToCart, incrementQuantity, decrementQuantity, RemoveAllItems } = cartSlices.actions;