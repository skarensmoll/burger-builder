import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button click={props.onCheckoutContinue} type="Success">Continue</Button>
      <Button click={props.onCheckoutCancel} type="Danger">Cancel</Button>
    </div>
  )
}

export default checkoutSummary;