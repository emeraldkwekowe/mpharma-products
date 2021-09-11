import { useState } from "react";
import { ProductsTable } from "../../components/products_table";
import { DeleteProduct } from "./deleteProduct";

export const Delete = props => {
    const [selectedProduct, setselectedProduct] = useState(false);
    return(
       <section className="view">
           <h1 className="animated fadeInRight faster">Delete Products</h1>
           <ProductsTable {...props} action={(val) => setselectedProduct(val)} label="Delete Product"/>
            {
                selectedProduct && 
                <DeleteProduct product={selectedProduct} closeModal={() => setselectedProduct(false)}/>
            }
       </section>
    )
}