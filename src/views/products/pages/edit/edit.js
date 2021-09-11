import { useState } from "react";
import { ProductsTable } from "../../components/products_table";
import { EditProduct } from "./editProduct";

export const Edit = () => {
    const [selectedProduct, setselectedProduct] = useState(false);
    return(
       <section className="view">
           <h1 className="animated fadeInRight">Edit Products</h1>
           <ProductsTable action={(val) => setselectedProduct(val)} label="Edit Product"/>
            {
                selectedProduct && 
                <EditProduct product={selectedProduct} closeModal={() => setselectedProduct(false)}/>
            }
       </section>
    )
}