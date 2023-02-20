import { createSlice } from '@reduxjs/toolkit'

export type ProductState = {
  productId: number
  quantity: number
  selected: boolean
}

export interface OrderState {
  products: ProductState[]
}

export const initialState: OrderState = {
  products: [],
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setNewOrder: (state: any, action: { payload: any }) => ({
      ...state,
      ...action.payload,
    }),
    resetToOrder: () => ({
      ...initialState,
    }),
  },
})

export const { setNewOrder, resetToOrder } = orderSlice.actions
export default orderSlice.reducer
