import {createSlice} from "@reduxjs/toolkit"

const initialState = 0;

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        jod(state,action){ return state+3 },
        ghata(state,action){ return state-5}
    }
})

export const {jod , ghata} = counterSlice.actions
export default counterSlice.reducer