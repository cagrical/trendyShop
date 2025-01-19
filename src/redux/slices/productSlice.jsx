import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,

}

const url = "http://localhost:5000"

export const getProductsFromDb = createAsyncThunk("getProductsFromDb", async () => {
    const response = await axios.get(url + "/products")
    return response.data
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsFromDb.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProductsFromDb.fulfilled, (state, actions) => {
            state.loading = false
            state.products = actions.payload
        })
    }
})


export const { setSelectedProduct } = productSlice.actions
export default productSlice.reducer