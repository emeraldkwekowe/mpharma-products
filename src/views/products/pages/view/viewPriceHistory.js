import Modal from "../../../../components/Modal/modal";

export const ViewPriceHistory = props => {
    const product = props.product;
    const prices = props.product.prices;
    console.log(product);

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
                            prices.slice(0).reverse().map((price, i2) => (
                                i2 === 0 ?
                                <tr key={i2} id="current">
                                    <td>GH₵ {price.price} - Current</td>
                                    <td> {price.date.replace(/"/g, "")}</td>
                                </tr>
                                :
                                <tr key={i2}>
                                    <td>GH₵ {price.price}</td>
                                    <td> {price.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Modal>
    )
}