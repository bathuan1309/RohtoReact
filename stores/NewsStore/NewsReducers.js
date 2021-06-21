import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    listNews: [],
    beautyTips: [],
    error: null,
    loading: false
}

const newsReducers = createReducer(initialState, {
    listNews: (state, action) => {return({...state,listNews : action.response.data.list})},
    
    beautyTips: (state, action) =>{return({...state,beautyTips : action.response.data.list})}
})

export default newsReducers