import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../components/Modal/modal";

//Import function to edit product in state
import { DeleteProductInState } from "../../../../redux/products/actions";

export const DeleteProduct = props => {
    //Get Products from the redux store
    const products = useSelector(state => state.products);

    const dispatch = useDispatch();
    const product = props.product;
    const [data] = useState({id: product.id})
    
    const Submit = async e => {
        e.preventDefault();
        dispatch(DeleteProductInState(data, products))
        props.closeModal();
    }
    return(
       <Modal close={() => props.closeModal()}>
           <div className="modal_content">
                <h3>Delete Product</h3>
                <form onSubmit={(e) => Submit(e)}>
                    <p>Are you sure you want to delete '{product.name}'?</p>
                    
                    <div className="bottom_area">
                        <button type="button" onClick={() => props.closeModal()}>Cancel</button>
                        <button id="afriprud-ui-widget_SubmitButton" type="submit">Delete</button>
                    </div>

                </form>
           </div>
       </Modal>
    )
}

