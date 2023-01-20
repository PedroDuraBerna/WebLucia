

// Aquí configuramos la fuente única de la verdad de mi web
// Usamos la librería redux-toolkit
// https://redux-toolkit.js.org/introduction/getting-started

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});