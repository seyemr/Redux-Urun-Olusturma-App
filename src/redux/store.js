import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data.Slice";
import modalSlice from "./modalSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice,
        modal:modalSlice,
    }
})