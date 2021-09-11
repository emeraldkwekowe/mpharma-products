import { normalizedState } from "./initialState";
import { ADD_NEW_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./types";



const productReducer = (state = normalizedState, action) => {
    switch(action.type){
        case ADD_NEW_PRODUCT:
            return state = {
                ...state,
                 entities:{
                     ...state.entities,
                     products:{
                         ...state.entities.products,
                         [action.product.id]:action.product
                     },
                    productIds:[...state.entities.productIds, action.product.id],
                    prices:{
                        ...state.entities.prices,
                        [action.productPrice.id] : action.productPrice
                    },
                    priceIds:[...state.entities.priceIds, action.productPrice.id]
                 }
            }

        case EDIT_PRODUCT:
            return state = {
                ...state,
                 entities:{
                     ...state.entities,
                    products:{
                        ...state.entities.products,
                        [action.product.id]:action.product
                    },
                    priceIds:action.priceIds,
                    prices: action.prices
                }
            }

        case DELETE_PRODUCT:
            return state = JSON.parse(action.data)
            
        case "CLEAR_STATE":
            return state = normalizedState

        //Add Product
        default: 
            return state;
    }
} 


export default productReducer;