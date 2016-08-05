import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavBarContainer from '../containers/NavBarContainer';
import Cart from '../containers/Cart';
//import TestReactRouter from '../components/TestReactRouter/TestReactRouter';
//import TestReactRouterRedirect from '../components/TestReactRouterRedirect/TestReactRouterRedirect';
//import RouterCommentsContainer from '../containers/RouterCommentsContainer';
import App from '../containers/App';

export default (
  <Route path="/" component={NavBarContainer}>
    <IndexRoute
      component={App}
    />
    <Route
      path="/products"
      component={App}
    />
    <Route
      path="/cart"
      component={Cart}
    />
  </Route>
);
