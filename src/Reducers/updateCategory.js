import { createSlice } from "@reduxjs/toolkit";


export const updateCategory = createSlice({
  name: "update",
  initialState:{
      collection:""
  },
  reducers: {
      updatecategory:(state,action)=>{
          state.collection = action.payload
      }
    
  },
});

export const { updatecategory } = updateCategory.actions;

export default updateCategory.reducer;
