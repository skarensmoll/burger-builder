import React, { Component } from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            onCheckoutCancel={this.checkoutCancelledHandler}
            onCheckoutContinue={this.checkoutContinuedHandler}
            ingredients={this.props.ings} />
          <Route path={this.props.match.path + '/contact-data'}
            component={ContactData}
            ingredients={this.props.ings}
            price={this.props.price} />
        </div>
      )
    }
    return (
      <div>
        {summary}
      </div>
    )
  }
}


const mapStateToProps = ({burgerBuilder, order}) => {
  return {
    ings: burgerBuilder.ingredients,
    price: burgerBuilder.totalPrice,
    purchased: order.purchased
  }
}

export default connect(mapStateToProps)(Checkout);