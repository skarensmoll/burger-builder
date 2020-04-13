import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>{props.price}</strong> </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        add={() => props.add(control.type)}
        remove={() => props.remove(control.type)}
        disabled={props.disabled[control.type]} />
    ))}
    <button
      disabled={props.purchasable}
      className={styles.OrderButton}
      onClick={props.order}>{props.isAuth ? 'Order now' : 'Sign up to order'}</button>
  </div>
);
export default buildControls;