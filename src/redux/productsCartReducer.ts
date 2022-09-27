
import {createSlice} from '@reduxjs/toolkit'

type ProductsState = { [id: number]: number }

const initialState:ProductsState = {}

export const productsCartSlice = createSlice({
  name:'product',
  initialState,
  reducers:{addCart1: (state, action) => ({
    ...state,
    [action.payload]:(state[action.payload ]|| 0) + 1
  })}

})

export const {addCart1} = productsCartSlice.actions

export default productsCartSlice.reducer