import React from 'react';
import Logo from '../Logo/Logo';
import styles from './SideDrawer.module.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import BackDrop from '../../components/UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux/Aux';


const sideDrawer = (props) => {
  const attachedClasses = [
    styles.SideDrawer,
    props.open ? styles.Open : styles.Close
  ]

  return (
    <Aux>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <div className={styles.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
      <BackDrop clicked={props.closed} show={props.open}/>
    </Aux>
  )
}

export default sideDrawer;