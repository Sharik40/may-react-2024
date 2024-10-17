import React, {FC} from 'react';
import {IComment} from "../../../models/IComment";
import styles from '../../borders-for-elements.module.css'
import objListing from "../../objListing";

type CommentProps = {
    comment: IComment;
}
const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div className={styles.comment}>
            {objListing(comment)}
        </div>
    );
};

export default Comment;
