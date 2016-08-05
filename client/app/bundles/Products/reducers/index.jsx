// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/HelloWorld/store/helloWorldStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import appReducer, { $$initialState as $$productsState } from './appReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$appStore: appReducer,
  railsContext: railsContextReducer
};

export const initialStates = {
  $$productsState,
  railsContextState
};
