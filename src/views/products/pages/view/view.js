import { useState } from "react";
import { ProductsTable } from "../../components/products_table";
import "./view.scss"
import { ViewPriceHistory } from "./viewPriceHistory";

export const View = props => {
    const [selectedProduct, setselectedProduct] = useState(false);

    return(
       <section className="view">
           <h1 className="animated fadeInRight faster">Products</h1>
           <ProductsTable {...props} action={(val) => setselectedProduct(val)} label="View price history"/>
           {
                selectedProduct &&
                <ViewPriceHistory product={selectedProduct} closeModal={() => setselectedProduct(false)}/>
            }
       </section>
    )
}