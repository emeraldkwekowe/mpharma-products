import { toast } from "react-toastify";
import { ADD_NEW_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./types";


//Action to add a new product to redux state
export const AddNewProduct = (data, lastProductId, lastPriceId) => dispatch => {    
    const {price, name} = data;
    const date = new Date();

    const newPriceId = parseInt(lastPriceId) + 1;
    const newProductId = parseInt(lastProductId) + 1;
    console.log(lastProductId);

    const product = {
        "id": newProductId,
        name,
        prices:[newPriceId]
    }

    const productPrice = {
        "id": newPriceId,
        price:parseInt(price),
        date: JSON.stringify(date),
        product:newProductId
    }

    dispatch({
        type: ADD_NEW_PRODUCT,
        product,
        productPrice
    })

    toast.success(`'${name}' added successfully`,  { theme: "colored" });
}



//Action to edit a product from redux state
export const EditProductInState = (data, initialProductPrices, priceList, prices) => dispatch => {
    const lastPriceId = priceList[priceList.length - 1];
    const priceIds = priceList;
    const {price, name, id} = data;
    const date = new Date();
    let newPrice;

    const product = {
        id,
        name,
        prices: initialProductPrices
    }
    
    if(isNaN(parseInt(price))){
    }
    else{
        product.prices.push(lastPriceId + 1);
        priceIds.push(lastPriceId + 1);
        newPrice = {
            id: lastPriceId + 1,
            price: parseInt(price),
            date: JSON.stringify(date),
            product:id
        }
        prices[newPrice.id] = newPrice
    }

    console.log(prices);

    dispatch({
        type: EDIT_PRODUCT,
        product,
        priceIds,
        prices
    })
    
    toast.success(`Product edited successfully`,  { theme: "colored" });
}


//Action to edit a product from redux state
export const DeleteProductInState = (data, products) => dispatch => {
    const {id} = data;
    const arrayOfIds = products.entities.productIds;
    const index = arrayOfIds.findIndex((item, i) => item === id)
    arrayOfIds.splice(index, 1);
    
    delete products.entities.products[id]

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