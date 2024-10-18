import React from 'react';
import {Link} from "react-router-dom";
import styles from './styles/menu.module.css'

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                Select page:
                <Link to={''}>Home</Link>
                <Link to={'products'}>Products</Link>
            </ul>
        </div>
    );
};

export default Menu;
