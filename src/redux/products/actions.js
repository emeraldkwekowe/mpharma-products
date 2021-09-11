import { toast } from "react-toastify";
import { ADD_NEW_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./types";


//Action to add a new product to redux state
export const AddNewProduct = data => dispatch => {
    const currentId = localStorage.getItem("last_product_id");
    const {price, name} = data;
    const date = new Date();
    const newProduct = {
        "id": parseInt(currentId) + 1,
        name,
        "prices": [
            {
                "id": 9,
                price:parseInt(price),
                date: JSON.stringify(date)
            }
        ]
    }
    dispatch({
        type: ADD_NEW_PRODUCT,
        data: newProduct
    })
    localStorage.setItem("last_product_id", parseInt(currentId) + 1);
    toast.success(`'${name}' added successfully`,  { theme: "colored" });
}



//Action to edit a product from redux state
export const EditProductInState = (data, products) => dispatch => {
    const {price, name, id} = data;
    const date = new Date();
    const index = products.findIndex((item, i) => item.id === id)
    const newProducts = products;
    newProducts[index].name = name;

    if(isNaN(parseInt(price))){
        
    }
    else{
        newProducts[index].prices.push(
            {
                "id": 4,
                price:parseInt(price),
                date
            }
        )
    }

    dispatch({
        type: EDIT_PRODUCT,
        data: JSON.stringify(newProducts)
    })
    
    toast.success(`Product edited successfully`,  { theme: "colored" });
}


//Action to edit a product from redux state
export const DeleteProductInState = (data, products) => dispatch => {
    const {id} = data;
    const index = products.findIndex((item, i) => item.id === id)
    const removeProduct = products.splice(index, 1);

    dispatch({
        type: DELETE_PRODUCT,
        data: JSON.stringify(products)
    })
    
    toast.success(`Product deleted successfully`,  { theme: "colored" });
}


export const clearState = () => dispatch => {
    dispatch({
        type: "CLEAR_STATE"
    })
}