import RouterApp from './RouterApp';
import appStore from '../store/appStore';
import ReactOnRails from 'react-on-rails';

// This is how react_on_rails can see the HelloWorldApp in the browser.
//ReactOnRails.setOptions({
  //traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
//})
ReactOnRails.register({ RouterApp });

ReactOnRails.registerStore({
  appStore,
});
