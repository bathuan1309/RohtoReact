import { combineReducers } from "redux";
import loginReducers from './LoginStore/LoginReducers'
import newsReducers from "./NewsStore/NewsReducers";
import productReducers from "./ProductsStore/ProductReducers";


 export default combineReducers({
    loginReducers,
    newsReducers,
    productReducers,
    
})