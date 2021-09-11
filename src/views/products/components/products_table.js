import { useSelector } from "react-redux"

export const ProductsTable = props => {
    const {action, label} = props;
    
    //Get data from the redux store (improvised db)
    const productsList = useSelector(state => state.products.entities.productIds);
    const products = useSelector(state => state.products.entities.products);
    const prices = useSelector(state => state.products.entities.prices);
    return(
        productsList.length < 1 ?
        <p>There are currently no products. <span onClick={() => props.setshowAddModal(true)} className="empty_line_a">Create some?</span></p>
        :
        <table className="animated fadeInRight delay-1s faster">
        <thead>
            <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Current Price</th>
                <th>Old Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                //Data is reversed because the latest additions are pushed at the end of the products array but should show at the top of the table
                productsList.slice(0).reverse().map((id, i) => {
                const product = products[id];
                const productPriceHistory = product.prices;
                return(
                 <tr key={i}>
                      <td>#{i+1}</td>
                      <td>{product.name}</td>
                      {
                         productPriceHistory.length > 1 ?
                         //Data is reversed because the latest additions are pushed at the end of the price array but should show at the top of the table
                         productPriceHistory.slice(0).reverse().map((id2, i2) => {
                             const price = prices[id2];
                            //  console.log(price);
                             return(
                                i2 < 2 &&
                                <td className={`price price_${i2}`} title={`Price as of ${price.date}`} key={i2}>GH₵ {price.price}</td>
                             )
                         })
                         :
                         <>
                             <td className={`price price_0`} title={`Price as of ${prices[productPriceHistory[0]].price.date}`}>GH₵ {prices[productPriceHistory[0]].price}</td>
                             <td className={`price price_1`}>-</td>
                         </>
                     }
                     <td onClick={() => action(product)}><span className="empty_line_a">{label}</span></td>
                 </tr>
                 )
                })
            }
           
        </tbody>
    </table>
    )
}