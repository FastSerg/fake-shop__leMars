import {createSlice} from '@reduxjs/toolkit'
import {omit} from 'lodash'

type ProductsState = { [id: number]: number }

const initialState:ProductsState = {}

export const productsCartSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    addCart: (state, action) => ({
    ...state,
    [action.payload]:(state[action.payload ]|| 0) + 1
  }),
  removeProductsCart: (state,action) => (
  omit(state,action.payload)
),
changeProductQuantity: (state,action) => ({
  ...state,
  [action.payload.id]: action.payload.count
      }) 
}

})

export const {addCart,removeProductsCart,changeProductQuantity } = productsCartSlice.actions

export default productsCartSlice.reducer