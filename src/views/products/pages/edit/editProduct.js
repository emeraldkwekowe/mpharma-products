import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../components/Modal/modal";

//Import function to edit product in state
import { EditProductInState } from "../../../../redux/products/actions";

export const EditProduct = props => {
    //Get Prices from the redux store
    const priceList = useSelector(state => state.products.entities.priceIds);
    const prices = useSelector(state => state.products.entities.prices);

    const dispatch = useDispatch();
    const product = props.product;
    const [data, setData] = useState({id: product.id, name:product.name})
    
    const Submit = async e => {
        e.preventDefault();
        dispatch(EditProductInState(data, product.prices, priceList, prices))
        props.closeModal();
    }
    return(
       <Modal close={() => props.closeModal()}>
           <div className="modal_content">
                <h3>Edit Product</h3>
                <form onSubmit={(e) => Submit(e)}>

                    <div>
                        <label>Product Name</label>
                        <input value={data.name} required onChange={(e) => setData({...data, name: e.target.value})} autoFocus/>
                    </div>

                    <div>
                        <label>Set New Product Price</label>
                        <input placeholder="Leave blank if you don't want to set a new price" type="number" onChange={(e) => setData({...data, price: e.target.value})}/>
                    </div>
                    
                    <div className="bottom_area">
                        <button type="button" onClick={() => props.closeModal()}>Cancel</button>
                        <button id="afriprud-ui-widget_SubmitButton" type="submit">Submit</button>
                    </div>

                </form>
           </div>
       </Modal>
    )
}

