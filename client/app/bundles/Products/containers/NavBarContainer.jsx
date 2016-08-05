import React, { PropTypes } from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import Layout from '../layout/Layout';
//import * as helloWorldActionCreators from '../actions/helloWorldActionCreators';

function mapStateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  if (state.$$appStore) {
    return { cartBadge: state.$$appStore.get("cart").size };
  } else {
    return { };
  }
}

// Simple example of a React "smart" component
const NavBarContainer = (props) => {
  const { cartBadge, children } = props;
  const locationState = props.location.state;

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
  return (
    <Layout {...{cartBadge, children, locationState}} />
  );
};

NavBarContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  //$$appStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps)(NavBarContainer);
