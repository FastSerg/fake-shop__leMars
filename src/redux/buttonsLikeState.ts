import { createSlice } from "@reduxjs/toolkit";

type buttonsStateProps ={
  [id: number]: boolean
}

const initialState:buttonsStateProps = {}

export const buttonsStateSlice = createSlice({
  name: 'buttonsState',
  initialState,
  reducers: {
    changeStateButtons: (state,action) => ({
      ...state,
      [action.payload]: !state[action.payload] 
    })

  }
})

export const {changeStateButtons} = buttonsStateSlice.actions

export default buttonsStateSlice.reducer