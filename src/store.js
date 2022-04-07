import { configureStore } from "@reduxjs/toolkit";

import updateCategory from "./Reducers/updateCategory";

export default configureStore({
    reducer:{
        updateCategory:updateCategory
    }
    
})