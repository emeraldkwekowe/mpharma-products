import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../../../components/Modal/modal";

//Import function to add product to state
import { AddNewProduct } from "../../../../redux/products/actions";

export const AddProduct = props => {
    const dispatch = useDispatch();
    const [data, setData] = useState({})
    
    const Submit = async e => {
        e.preventDefault();
        dispatch(AddNewProduct(data))
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

