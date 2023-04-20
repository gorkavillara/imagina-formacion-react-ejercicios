import { configureStore } from "@reduxjs/toolkit"
import contadorSlice from "../features/contador/contadorSlice"

export const store = configureStore({
	reducer: {
        contador: contadorSlice
    }
})