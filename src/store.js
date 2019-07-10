import { createStore, compose, combineReducers } from 'redux';
import { tableReducer } from './reducers/tableReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    tableReducer
  }),
  composeEnhancers()
);

export default store;
