import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import WithErrorHandler from '../../../hoc/WithErrorHandler/WIthErrorHandler';
import * as actions from '../../../store/actions/order';
import { checkValidity } from '../../../shared/utility';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your zip code'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest'},
            { value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: 'cheapest',
        validation: {
          required: false
        },
      },
    },
    totalPrice: 0,
    formIsValid: false
  }

  inputChangedHandler = (e, inputId) => {
    const updatedOrderForm = {...this.state.orderForm};
    const updatedElement = {
      ...updatedOrderForm[inputId]
    };
    updatedElement.value = e.target.value;
    updatedOrderForm[inputId] = updatedElement;
    updatedOrderForm[inputId].valid =  checkValidity(updatedElement.value, updatedElement.validation)
    updatedOrderForm[inputId].touched = true;

    let formIsValid = true;
    for (const key in updatedOrderForm) {
      formIsValid = updatedOrderForm[key].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm , formIsValid })
  }

  orderHandler = (e) => {
    e.preventDefault();
     const formData = {};

     for (const key in this.state.orderForm) {
       formData[key] = this.state.orderForm[key].value
     }

     const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId
    }

    this.props.onOrderBurger(order, this.props.token);
  }

  render() {

    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(element=> (
          <Input key={element.id}
            {...element.config}
            invalid={!element.config.valid}
            shouldValidate={element.config.validation}
            touched={element.config.touched}
          changed={(e)=>this.inputChangedHandler(e, element.id)}/>
        ))}
        <Button type="Success" disabled={!this.state.formIsValid} >Order</Button>
      </form>
    )
    if (this.props.loading){
      form = <Spinner/>
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

const mapStateToProps = ({burgerBuilder, order, auth}) => {
  return {
    ings: burgerBuilder.ingredients,
    price: burgerBuilder.totalPrice,
    loading: order.loading,
    token: auth.token,
    userId: auth.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token)=> dispatch(actions.purchaseBurger(orderData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( WithErrorHandler(ContactData, axios));