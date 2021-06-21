import { createReducer } from "@reduxjs/toolkit"

const loginReducers =createReducer("None",{
    Success:(state,action) =>action.response,
    Failure:(state,action) => action
})
export default loginReducers