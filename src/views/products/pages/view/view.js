import { useSelector } from "react-redux"
import "./view.scss"

export const View = () => {
    //Get Products from the redux store
    const products = useSelector(state => state.products);
    return(
       <section className="view">
           <h1>Products</h1>
           <table>
               <thead>
                   <tr>
                       <td>S/N</td>
                       <td>Title</td>
                       <td>Current Price</td>
                       <td>Old Price</td>
                       <td>Action</td>
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
                                    <td className={`price price_${i2}`} title={`Price as of ${price.date}`} key={i2}>GH₵ {price.price}</td>
                                ))
                                :
                                <>
                                    <td className={`price price_0`} title={`Price as of ${prices[0].price.date}`}>GH₵ {prices[0].price}</td>
                                    <td className={`price price_1`}>-</td>
                                </>
                            }
                            <td><span className="empty_line_a">View Price History</span></td>
                        </tr>
                        )
                       })
                   }
                  
               </tbody>
           </table>
       </section>
    )
}