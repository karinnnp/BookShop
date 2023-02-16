import { createSlice } from '@reduxjs/toolkit'

export type Search = { 
  text: string
}

export const initialState: Search = { 
  text: '',
}

const searchSlice  = createSlice({
  name: 'search',
  initialState,
  reducers: { 
      setNewSearch: (state: any, action: { payload: any }) => ({
          ...state,
          ...action.payload,
      }),
      resetToSearch: () => ({
          ...initialState,
      }),
  },
})

export const { setNewSearch, resetToSearch } = searchSlice.actions
export default searchSlice.reducer