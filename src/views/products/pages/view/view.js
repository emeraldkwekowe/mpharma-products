import { useSelector } from "react-redux"
import "./view.scss"

export const View = () => {
    //Get Products from the redux store
    const products = useSelector(state => state.products);
    return(
       <section className="view">
           <h1>Products</h1>
           <table>
               <tbody>
                   {
                       products.map((product, i) => {
                        const prices = product.prices;
                        return(
                        <tr key={i}>
                            <td>#{i+1}</td>
                            <td>{product.name}</td>
                            {
                                prices.map((price, i2) => (
                                    <td className={`price price_${i2}`} title={`Price as of ${price.date}`} key={i2}>GH₵ {price.price}</td>
                                ))
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