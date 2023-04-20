import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valor: 0
}

export const contadorSlice = createSlice({
    name: 'contador',
    initialState,
    reducers: {
        increment: (state, action) => {
            return {
                valor: state.valor + 1
            }
        },
        decrement: (state, action) => {
            return {
                valor: state.valor - 1
            }
        },
        xIncrement: (state, action) => {
            return {
                valor: state.valor + action.payload
            }
        },
        xDecrement: (state, action) => {
            return {
                valor: state.valor - action.payload
            }
        }
    }
})

export default contadorSlice.reducer