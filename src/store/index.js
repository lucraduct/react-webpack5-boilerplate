import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import history from './history';
import appReducer from '../redux/appReducer';

const middlewareRouter = [ReduxThunk, routerMiddleware(history)];

const reducer = combineReducers({
  ...appReducer,
  router: connectRouter(history),
});

const middlewareReducer = (reducer) => (state, action) => {
  return reducer(state, action);
};

// const rootReducer = middlewareReducer(reducer);

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
// const store = createStore(rootReducer); //, composeEnhancers(applyMiddleware(...middlewareRouter)));
const store = createStore(
  middlewareReducer(reducer),
  composeEnhancers(applyMiddleware(...middlewareRouter))
);

export default store;
