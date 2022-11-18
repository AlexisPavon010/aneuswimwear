import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  cartIsOpen: boolean
}

const initialState: initialStateProps = {
  cartIsOpen: false
}

export const uiSlices = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openCartMenu: (state, { payload }) => {
      state.cartIsOpen = payload
    }
  }
})

export const { openCartMenu } = uiSlices.actions;