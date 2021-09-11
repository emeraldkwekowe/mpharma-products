import { InitialproductState } from "./initialState";
import { ADD_NEW_PRODUCT, EDIT_PRODUCT } from "./types";

const productReducer = (state = InitialproductState, action) => {
    switch(action.type){
        case ADD_NEW_PRODUCT:
            return state = [...state, action.data]

        case EDIT_PRODUCT:
            return state = JSON.parse(action.data)

        case "CLEAR_STATE":
            return state = InitialproductState

        //Add Product
        default: 
            return state;
    }
} 

//Set the value of the last id for manual update (Not proper; typically should be set automatically from an ideal databse)
localStorage.setItem("last_product_id", 3);

export default productReducer;