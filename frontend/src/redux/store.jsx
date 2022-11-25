import { configureStore } from "@reduxjs/toolkit";
import gestionaleSlice from "./gestionale";

export const store = configureStore({
    reducer:{
        gestionale:gestionaleSlice,
    },
})