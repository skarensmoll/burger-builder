import React from 'react';
import styles from './Order.module.css';

const order = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map(key => (
      <li style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc'
          }}>
        <strong>{key} </strong>
        ({props.ingredients[key]})
      </li>
    ));

  return (
    <div className={styles.Order}>
      <p>Ingredients: </p>
      <ul>
        {ingredients}
      </ul>
      <p>Price: <strong>USD {props.price}</strong></p>
    </div>
  );
};

export default order;