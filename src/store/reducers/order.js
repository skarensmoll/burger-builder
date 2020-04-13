import * as actionTypes from '../actions/actionTypes';


const initialState = {
  orders: [],
  loading: false,
  purchased: false
}


const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  }
  return {
    ...state,
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true
  }
}

const purchaseBurgerFailed = (state, action) => {
  return {
    ...state,
    loading: false
  }
}

const purchaseBurgerStart = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const fetchOrderStart = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const purchaseInit = (state, action) => {
  return {
    ...state,
    purchased: false
  }
}


const fetchOrderFailed = (state, action) => {
  return {
    ...state,
    loading: false
  }
}


const fetchOrderSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    orders: action.orders
  }
}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state,action);
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFailed(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
    case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAILED: return fetchOrderFailed(state, action);
    default:
      return state;
  }
}

export default reducer;