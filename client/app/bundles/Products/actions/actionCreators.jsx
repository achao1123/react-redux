import actionTypes from '../constants/appConstants';
import requestsManager from 'lib/requestsManager';

export function addToCart(product) {
  return dispatch => {
    return (
      requestsManager
        .addToCart({product})
        .then(res => dispatch(addToCartSuccess(res.data)))
    );
  };
}

export function addToCartSuccess(product) {
  return {
    type: actionTypes.ADD_TO_CART,
    product
  };
}

export function removeFromCart(productId) {
  return dispatch => {
    return (
      requestsManager
        .removeFromCart({productId})
        .then(res => dispatch(removeFromCartSuccess(res.data.id)))
    );
  };

}

export function removeFromCartSuccess(productId) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    productId
  };
}
