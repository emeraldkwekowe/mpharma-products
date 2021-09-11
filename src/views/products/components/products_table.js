import { useSelector } from "react-redux"

export const ProductsTable = props => {
    const {action, label} = props;
    
    //Get Products from the redux store
    const products = useSelector(state => state.products);
    return(
        <table className="animated fadeInRight delay-1s">
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
                products.slice(0).reverse().map((product, i) => {
                 const prices = product.prices;
                 return(
                 <tr key={i}>
                     <td>#{i+1}</td>
                     <td>{product.name}</td>
                     {
                         prices.length > 1 ?
                         //Data is reversed because the latest additions are pushed at the end of the price array but should show at the top of the table
                         prices.slice(0).reverse().map((price, i2) => (
                             i2 < 2 &&
                             <td className={`price price_${i2}`} title={`Price as of ${price.date}`} key={i2}>GH₵ {price.price}</td>
                         ))
                         :
                         <>
                             <td className={`price price_0`} title={`Price as of ${prices[0].price.date}`}>GH₵ {prices[0].price}</td>
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