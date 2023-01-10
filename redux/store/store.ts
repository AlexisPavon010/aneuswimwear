import { configureStore } from '@reduxjs/toolkit'

import { shippingsSlice } from '../shippings/shippings'
import { cartSlices } from '../cart/cartSlices'
import { uiSlices } from '../ui/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiSlices.reducer,
    cart: cartSlices.reducer,
    shippings: shippingsSlice.reducer,
  },
})