import React from 'react';
import styles from './Menu.module.css';
import {ReactComponent as HamburgerIcon} from '../../../assets/svgs/hamburger.svg';

const menu = (props) => (
    <div onClick={props.clicked} className={styles.Menu}>
      <HamburgerIcon/>
    </div>
);

export default menu;