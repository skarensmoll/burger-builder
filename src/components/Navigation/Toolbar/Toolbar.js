import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../../SideDrawer/Menu/Menu';


const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <Menu clicked={props.menuClicked} />
    <div className={styles.Logo}>
      <Logo/>
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;