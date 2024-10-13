import React, {FC} from 'react';
import {ISingleProduct} from "../models/ISingleProduct";
import './Product.css'
import './Reviews.css'
import Reviews from "./Reviews";
import {IReviews} from "../models/IReviews";

type TypeProps = { elem: ISingleProduct }

const Product: FC<TypeProps> = ({elem}) => {
    return (
        <div className="product">
            <b>id: {elem.id}</b>
            <p>title: {elem.title}</p>
            <p>description: {elem.description}</p>
            <p>category: {elem.category}</p>
            <p>price: {elem.price}</p>
            <p>discountPercentage: {elem.discountPercentage}</p>
            <p>rating: {elem.rating}</p>
            <p>stock: {elem.stock}</p>
            <p>tags: {elem.tags}</p>
            <p>brand: {elem.brand ? elem.brand : 'none'}</p>
            <p>sku: {elem.sku}</p>
            <p>dimensions: {'(width:' + elem.dimensions.width + " height:" + elem.dimensions.height + " depth:" + elem.dimensions.depth + ")"}</p>
            <p>warrantyInformation: {elem.warrantyInformation}</p>
            <p>shippingInformation: {elem.shippingInformation}</p>
            <p>availabilityStatus: {elem.availabilityStatus}</p>
            <div>reviews: {elem.reviews.map((rev: IReviews) => (<Reviews reviews={rev}/>))}</div>
            <p>returnPolicy: {elem.returnPolicy}</p>
            <p>minimumOrderQuantity: {elem.minimumOrderQuantity}</p>
            <p>meta: {elem.meta.createdAt + ' ' + elem.meta.updatedAt + ' ' + elem.meta.barcode}</p>
            <img className='qrCode' src={elem.meta.qrCode} alt={elem.thumbnail}/>
            {
                elem.images.map(image => <img src={image} alt={elem.thumbnail}/>)
            }


        </div>
    );
};

export default Product;
