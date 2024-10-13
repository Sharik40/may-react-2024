import React, {FC} from 'react';
import {apiProducts} from "../../data";
import {ISingleProduct} from "../models/ISingleProduct";
import Product from "../product/Product";


const Products: FC = () => {
    const products: ISingleProduct[] = apiProducts.products;
    return (
        <div>
            {
                products.map((product: ISingleProduct) => (<Product elem={product}/>))
            }
        </div>
    );
};

export default Products;
