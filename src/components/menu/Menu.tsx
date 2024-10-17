import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div>
          <ul className={styles.menu}>
              Select page:
              <Link to={'/'}>Home</Link>
              <Link to={'/users'}>Users</Link>
              <Link to={'/posts'}>Posts</Link>
              <Link to={'/comments'}>Comments</Link>
          </ul>
        </div>
    );
};

export default Menu;
