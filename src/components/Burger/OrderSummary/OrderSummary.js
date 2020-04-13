import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render() {

    let ingredientSummary = Object.keys(this.props.ingredients).map(key => (
      <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}: </span>
        {this.props.ingredients[key]}
      </li>
    ));

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button click={this.props.purchaseCancelled} type='Danger'>Cancel</Button>
        <Button click={this.props.purchaseContinue} type='Success'>Continue</Button>
      </Aux>
    );
  }
}


export default OrderSummary;