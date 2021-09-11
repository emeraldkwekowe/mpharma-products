import { useSelector } from "react-redux";
import Modal from "../../../../components/Modal/modal";

export const ViewPriceHistory = props => {
    //Get data from the redux store (improvised db)
    const prices = useSelector(state => state.products.entities.prices);

    const product = props.product;
    const productPriceHistory = product.prices;
    
    console.log(prices);
    return(
        <Modal close={() => props.closeModal()}>
            <div className="modal_content">
                <h3>Price history of '{product.name}'</h3>
                <table style={{marginTop:30}}>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productPriceHistory.slice(0).reverse().map((id, i) => {
                                const price = prices[id];
                                return(
                                    i === 0 ?
                                    <tr key={i} id="current">
                                        <td>GH₵ {price.price} - Current</td>
                                        <td> {price.date.replace(/"/g, "")}</td>
                                    </tr>
                                    :
                                    <tr key={i}>
                                        <td>GH₵ {price.price}</td>
                                        <td> {price.date.replace(/"/g, "")}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Modal>
    )
}