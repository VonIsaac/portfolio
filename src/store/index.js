import { configureStore } from "@reduxjs/toolkit";

import allfunctions from "./functions-slice";

const store = configureStore({
    reducer:{
        function: allfunctions.reducer
    }
})

export default store