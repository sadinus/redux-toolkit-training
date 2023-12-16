import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  numberOfCakes: 10,
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state = initialState) => {},
  },
})
