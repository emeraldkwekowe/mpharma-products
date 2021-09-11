import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../components/Modal/modal";

//Import function to add product to state
import { AddNewProduct } from "../../../../redux/products/actions";

export const AddProduct = props => {
    const dispatch = useDispatch();
    const [data, setData] = useState({})

    //Get data from the redux store (improvised db)
    const productsList = useSelector(state => state.products.entities.productIds);
    const priceList = useSelector(state => state.products.entities.priceIds);
    
    const Submit = async e => {
        e.preventDefault();

        dispatch(AddNewProduct(data, productsList.length === 0 ? 0 : productsList[productsList.length - 1], priceList[priceList.length - 1]))
        props.closeModal();
    }
    return(
       <Modal close={() => props.closeModal()}>
           <div className="modal_content">
                <h3>Add a new product</h3>
                <form onSubmit={(e) => Submit(e)}>

                    <div>
                        <label>Product Name</label>
                        <input required onChange={(e) => setData({...data, name: e.target.value})} autoFocus/>
                    </div>

                    <div>
                        <label>Product Price</label>
                        <input required type="number" onChange={(e) => setData({...data, price: e.target.value})}/>
                    </div>
                    
                    <div className="bottom_area">
                        <button type="button" onClick={() => props.closeModal()}>Cancel</button>
                        <button id="afriprud-ui-widget_SubmitButton" type="submit">Add Product</button>
                    </div>

                </form>
           </div>
       </Modal>
    )
}

