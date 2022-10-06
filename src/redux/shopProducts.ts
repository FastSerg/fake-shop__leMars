import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {ArrProductsProps} from '../components/Arrays/arraysProducts'

const initialState:ArrProductsProps[] = []

export const fetchShopProducts = createAsyncThunk<ArrProductsProps[], undefined>("shopProducts/fetchShopProducts",
async() => {
  const response = await (await axios.get("https://run.mocky.io/v3/e86eada7-4a1c-4444-8bad-9070134675e3"))
  return response.data.arrProducts
} 
)

export const shopProductsSlice = createSlice({
  name:'shopProducts',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder.addCase(fetchShopProducts.fulfilled, (state,action) => {
return state = action.payload
    })
  }
})

export default shopProductsSlice.reducer