import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

export class Layout extends Component {

  state= {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    //const showSideDrawer = !this.state.showSideDrawer;
    this.setState({showSideDrawer: false})
  }

  menuClickedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          menuClicked={this.menuClickedHandler} ></Toolbar>
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}></SideDrawer>
        <main className={styles.container}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !==null
  }
}

export default connect(mapStateToProps)(Layout);