import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {ArraysAllProps} from '../components/Arrays/arraysAll'
  
const initialState: ArraysAllProps[]=[]

export const fetchProducts = createAsyncThunk<ArraysAllProps[], undefined>('products/fetchProducts', 
async () => {
  const {data} = await axios.get('https://run.mocky.io/v3/adde1b76-3a6f-4c8b-916b-4653471f7f83')
  return data.products
})

export const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state,action) => {
      return state = action.payload
    })
  }
})

export default productsSlice.reducer

