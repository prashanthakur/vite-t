import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    data:[],
};

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        fetchProducts(state,action){
            state.data = action.payload
        },
    }
});

export const {fetchProducts} = productSlice.actions
export default productSlice.reducer;

//Thunk middleware

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const result = await data.json()
        dispatch(fetchProducts(result))
    }
}
