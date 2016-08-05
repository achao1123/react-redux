import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from '../routes/routes';
import App from '../containers/App';
import createStore from '../store/appStore';
import ReactOnRails from 'react-on-rails';
import appStore from '../store/appStore';


// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('appStore');
  //const store = createStore(_props);

  const history = syncHistoryWithStore(
    browserHistory,
    store
  );

  const reactComponent = (
    <Provider store={store}>
      <Router history={history} children={routes} />
    </Provider>
  );
  return reactComponent;
};
