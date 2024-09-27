import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vans: [],
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload; 
    },
  },
});

export const { setVans } = vansSlice.actions;

export default vansSlice.reducer;