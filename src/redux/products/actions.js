import { toast } from "react-toastify";
import { ADD_NEW_PRODUCT } from "./types";


//Action to add a new product to redux state
export const AddNewProduct = data => dispatch => {
    const currentId = localStorage.getItem("last_product_id");
    const {price, title} = data;
    const date = new Date();
    const newProduct = {
        "id": parseInt(currentId) + 1,
        "name": title,
        "prices": [
            {
                "id": 9,
                price,
                date
            }
        ]
    }
    dispatch({
        type: ADD_NEW_PRODUCT,
        data: newProduct
    })
    localStorage.setItem("last_product_id", parseInt(currentId) + 1);
    toast.success(`'${title}' added successfully`,  { theme: "colored" });
}


export const clearState = () => dispatch => {
    dispatch({
        type: "CLEAR_STATE"
    })
}