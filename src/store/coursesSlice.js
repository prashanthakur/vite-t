import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    cart:[]
}

const coursesSlice = createSlice({
    name:'courses',
    initialState,
    reducers:{
        fetchCourses(state,action){
            state.data = action.payload
        },
        AddToCourses(state,action){
            state.cart.push(action.payload)
        }
    }
})

export const {fetchCourses,AddToCourses} = coursesSlice.actions
export default coursesSlice.reducer


//Thunk middleware

export function getCourses(){
    return async function getCoursesThunk(dispatch,getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const result = await data.json()
        dispatch(fetchCourses(result))
    }
}
