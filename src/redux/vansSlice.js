import { createSlice } from "@reduxjs/toolkit";

const vansSlice = createSlice({
  name: "vans",
  initialState: {
    vans: [], 
  },
  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload; 
    },
  },
});

export const { setVans } = vansSlice.actions;

export default vansSlice.reducer;