import React, {FC} from 'react';
import {IUser} from "../../../models/IUser";
import styles from '../../borders-for-elements.module.css'
import objListing from '../../objListing'

type UserProps = {
    user: IUser;
}


const User: FC<UserProps> = ({user}) => {
    return (
        <div className={styles.box}>
            {objListing(user)}
        </div>
    );
};

export default User;
