
import {createSlice} from '@reduxjs/toolkit'
import {omit} from 'lodash'

type ProductsState = { [id: number]: number }

const initialState:ProductsState = {2:1}

export const productsCartSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    addCart1: (state, action) => ({
    ...state,
    [action.payload]:(state[action.payload ]|| 0) + 1
  }),
  removeProductsCart: (state,action) => (
  omit(state,action.payload)
)
}

})

export const {addCart1,removeProductsCart} = productsCartSlice.actions

export default productsCartSlice.reducer