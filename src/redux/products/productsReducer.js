import { InitialproductState, normalizedState } from "./initialState";
import { ADD_NEW_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./types";

// import { normalize, schema } from 'normalizr';

// const price = new schema.Entity('prices');

// const product = new schema.Entity('products');

// const normalizedData = normalize(InitialproductState, product);

console.log(normalizedState);



const productReducer = (state = normalizedState, action) => {
    switch(action.type){
        case ADD_NEW_PRODUCT:
            return state = [...state, action.data]

        case EDIT_PRODUCT:
            return state = JSON.parse(action.data)

        case DELETE_PRODUCT:
            return state = JSON.parse(action.data)
            
        case "CLEAR_STATE":
            return state = normalizedState

        //Add Product
        default: 
            return state;
    }
} 

//Set the value of the last id for manual update (Not proper; typically should be set automatically from an ideal databse)
localStorage.setItem("last_product_id", 3);

export default productReducer;