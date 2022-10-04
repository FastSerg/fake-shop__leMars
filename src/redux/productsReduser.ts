import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import {ArraysAllProps} from '../components/Arrays/arraysAll'
 
const initialState: ArraysAllProps[]=[]

export const fetchProducts = createAsyncThunk<ArraysAllProps[], undefined>('products/fetchProducts', 
async () => {
  const response = await axios.get('https://run.mocky.io/v3/73f702ed-6ad2-46dc-94ce-6eba9f17172a')
  console.log(response.data)  
  return response.data
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

