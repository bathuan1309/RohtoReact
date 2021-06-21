import { createAction, createReducer } from "@reduxjs/toolkit"
const initialState = {
    categoryProduct: [],
    categoryService: [],
    listProducts: [],
    detailProduct: [],
    relateProduct: [],
    error: null,
    loading: false
}
const productReducers = createReducer(initialState, {
    getCategoryProduct: (state, action) => {return({...state,categoryProduct : action.response.data.list})},
    getCategoryService: (state, action) => {return({...state,categoryService : action.response.data.list})},
    getListProducts: (state, action) => {return({...state,listProducts : action.response.data.list})},
    getDetailProduct: (state, action) => {return({...state,detailProduct : action.response.data.list})},
    getRelateProduct: (state, action) => {return({...state,relateProduct : action.response.data.list})},
    
})
export default productReducers