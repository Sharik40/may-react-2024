import React, {FC} from 'react';
import {IReviews} from "../models/IReviews";

type TypeProps = { reviews: IReviews }
const Reviews: FC<TypeProps> = ({reviews}) => {
    return (
        <div className='reviews'>
            <p>{reviews.rating}</p>
            <p>{reviews.comment}</p>
            <p>{reviews.date}</p>
            <p>{reviews.reviewerName}</p>
            <p>{reviews.reviewerEmail}</p>
        </div>
    );
};

export default Reviews;
