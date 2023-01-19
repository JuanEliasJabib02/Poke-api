import { createSlice } from "@reduxjs/toolkit";



const nameTrainerSlice = createSlice({
  name: "nameTrainer",
  initialState: null,
  reducers: {
    setNameTrainerGlobal: (state, action) => action.payload
  }
})

export const { setNameTrainerGlobal } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer