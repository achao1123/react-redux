import Immutable from 'immutable';

import actionTypes from '../constants/appConstants';

export const $$initialState = Immutable.fromJS({
  $$products: [],
  cart: [],
  cartBadge: 0,
});

export default function appReducer($$state = $$initialState, action) {
  const { type, product, productId } = action;
  const $$cart = $$state.get("cart");
  const $$products = $$state.get("$$products");

  switch (type) {
    case actionTypes.ADD_TO_CART:
      return $$state.merge({
        $$products: $$products.setIn(
                      [getIdx($$products, product.id), "in_cart"], 
                      true),
        cart: [...$$cart, product],
      });
    case actionTypes.REMOVE_FROM_CART:
      return $$state.merge({
        $$products: $$products.setIn(
                      [getIdx($$products, productId), "in_cart"], 
                      false),
        cart: $$cart.delete(getIdx($$cart, productId)),
      });
    default:
      return $$state;
  }
}

function getIdx(list, id) {
  return list.findIndex(function(item) {
    return item.get("id") === id;
  })
}
