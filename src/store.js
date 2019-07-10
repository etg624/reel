import { createStore, compose, combineReducers } from 'redux';
import { inventoryReducer } from './reducers/inventoryReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    inventoryReducer
  }),
  composeEnhancers()
);

export default store;
