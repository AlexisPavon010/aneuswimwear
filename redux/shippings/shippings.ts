import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  name: null | string;
  price: null | number
}

const initialState: initialStateProps = {
  name: null,
  price: 0
}

export const shippingsSlice = createSlice({
  name: 'shippings',
  initialState,
  reducers: {
    setLoadShippings(state, { payload }) {
      return {
        ...payload
      }
    }
  }
})

export const { setLoadShippings } = shippingsSlice.actions;