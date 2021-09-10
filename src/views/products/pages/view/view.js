import "./view.scss"

export const View = () => {
    return(
       <section className="view">
           <h1>Products</h1>
           <table>
               <tbody>
                   <tr>
                   <td>#1</td>
                   <td>Exforge 10mg</td>
                   <td className="price">GH₵ 10.00</td>
                   <td className="price one">GH₵ 10.00</td>
                   <td className="price two">GH₵ 10.00</td>
                   <td><span className="empty_line_a">View Price History</span></td>
                   </tr>
               </tbody>
           </table>
       </section>
    )
}