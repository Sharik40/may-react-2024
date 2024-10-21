import React, {useEffect, useState} from 'react';
import PaginationComponent from "../components/PaginationComponent";
import {IProducts} from "../models/IProducts";
import {getAll} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Products from "../components/Products";

const ProductsPage = () => {
    const[query] = useSearchParams({page: '1'});
    const [products, setProducts] = useState<IProducts[]>([]);
    const [nextFlag, setNextFlag] = useState(false);
    const [prevFlag, setPrevFlag] = useState(false);

    useEffect(() => {
        const page = query.get('page');
        if (page)
            getAll<{products: IProducts[]}>(+page).then(value => {
                setProducts(value.products);
                const lastId = value.products[value.products.length - 1].id;
                console.log(value.products);
                if (lastId >= value.total)
                    setNextFlag(true);
                else
                    setNextFlag(false);
                if (+page === 1)
                    setPrevFlag(true);
                else
                    setPrevFlag(false);
            })
    }, [query]);
    return (
        <div>
            <PaginationComponent nextFlag={nextFlag} prevFlag={prevFlag}/>
            <Products products={products}/>
        </div>
    );
};

export default ProductsPage;
