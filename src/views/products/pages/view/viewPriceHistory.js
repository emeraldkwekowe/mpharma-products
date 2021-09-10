import Modal from "../../../../components/Modal/modal";

export const ViewPriceHistory = props => {
    const product = props.product;
    const prices = props.product.prices;
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
                                <tr>
                                    <td key={i2}>GH₵ {price.price}</td>
                                    <td key={i2}> {price.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Modal>
    )
}