import {createSlice} from '@reduxjs/toolkit'
import {omit} from 'lodash'

type ProductsState = { [id: number]: number }

const initialState:ProductsState = {5:2}

export const productsCartSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    addCart: (state, action) => ({
    ...state,
    [action.payload]:(state[action.payload ]|| 0) + action.payload.count
  }),
  removeProductsCart: (state,action) => (
  omit(state,action.payload)
),
// changeProductQuantity: (state,action) => (
//  { ...state,
 
//   [action.payload]:action.payload.count
//   }
// )
}

})

export const {addCart,removeProductsCart } = productsCartSlice.actions

export default productsCartSlice.reducer