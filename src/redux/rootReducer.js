import products from "./products/productsReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    products
})