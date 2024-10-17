import React, {FC} from 'react';
import styles from '../../borders-for-elements.module.css'
import {IPost} from "../../../models/IPost";
import objListing from "../../objListing";

type UserProps = {
    post: IPost;
}


const Post: FC<UserProps> = ({post}) => {
    return (
        <div className={styles.box}>
            {objListing(post)}
        </div>
    );
};

export default Post;
