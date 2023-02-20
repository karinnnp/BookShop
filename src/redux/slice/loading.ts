import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoadingState {
  loading: boolean
}

export const initialState = { loading: false } as LoadingState

export const { loading } = initialState

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>){
      state.loading = action.payload
    }
   
  },
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer