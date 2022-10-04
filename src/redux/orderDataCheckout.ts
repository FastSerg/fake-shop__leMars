import {createSlice} from '@reduxjs/toolkit'

type OrderData = {
  name: string
  lastName: string
  company?: string
  StreetAddress?: string //
  ApartmentAddress?: string //
  city?: string //
  county?: string
  postcode?: string //
  phone?: string //
  emeil?: any //
  text?: string //
}

const initialState:OrderData = {
  name: '',
  lastName: '',
  company: '',
  StreetAddress: '',
  ApartmentAddress: '',
  city: '',
  county: '',
  postcode: '',
  phone: '+380',
  emeil: '',
  text: '',
}

export const orderDataSlice = createSlice({
  name:'orderData',
  initialState,
  reducers:{
    handleName: (state, action) => ({
    ...state,
    // name: e.target.value,
  }), 
}

})

// const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setOrderData((prevState: OrderData) => ({
//       ...prevState,
//       name: e.target.value,
//   }))
// }

export const { } = orderDataSlice.actions

export default orderDataSlice.reducer