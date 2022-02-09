import { configureStore } from '@reduxjs/toolkit'
import consumableReducer from './store/consumable'

export const store = configureStore({
  reducer: {
    consumable: consumableReducer,
  },
})