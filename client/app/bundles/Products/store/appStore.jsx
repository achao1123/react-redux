import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html
// This is not actually used for this simple example, but you'd probably want to use this
// once your app has asynchronous actions.
import thunkMiddleware from 'redux-thunk';

// This provides an example of logging redux actions to the console.
// You'd want to disable this for production.
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

import reducers from '../reducers';
import { routerReducer } from 'react-router-redux';
import { initialStates } from '../reducers';

export default (props, railsContext) => {
  // This is how we get initial props Rails into redux.
  const initialProducts = props.products;
  const initialCart = props.cart;

  const { name } = props;
  const { $$productsState } = initialStates;

  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    $$appStore : $$productsState.merge({
      $$products: initialProducts,
      cart: initialCart
    }),
    railsContext
  };

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  //const composedStore = compose(
    //applyMiddleware(thunkMiddleware, loggerMiddleware)
  //);
  //const storeCreator = composedStore(createStore);
  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
