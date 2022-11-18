import { configureStore } from '@reduxjs/toolkit'

import { cartSlices } from '../cart/cartSlices'
import { uiSlices } from '../ui/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiSlices.reducer,
    cart: cartSlices.reducer,
  },
})