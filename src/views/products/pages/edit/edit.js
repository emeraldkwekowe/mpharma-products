import { useState } from "react";
import { ProductsTable } from "../../components/products_table";
import { EditProduct } from "./editProduct";

export const Edit = props => {
    const [selectedProduct, setselectedProduct] = useState(false);
    return(
       <section className="view">
           <h1 className="animated fadeInRight faster">Edit Products</h1>
           <ProductsTable {...props} action={(val) => setselectedProduct(val)} label="Edit Product"/>
            {
                selectedProduct && 
                <EditProduct product={selectedProduct} closeModal={() => setselectedProduct(false)}/>
            }
       </section>
    )
}