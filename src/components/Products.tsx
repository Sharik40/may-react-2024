import React, {FC} from 'react';
import {IProducts} from "../models/IProducts";

type ProductProps = {
    products: IProducts[];
}
const Products:FC<ProductProps> = ({products}) => {

    return (
        <div>
            {
                products.map(item => <div key={item.id}>Id: {item.id}</div>)
            }
        </div>
    );
};

export default Products;
