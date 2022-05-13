import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import appReducer from "../redux/appReducer";

const middlewareRouter = [ReduxThunk];

const reducer = combineReducers({
  ...appReducer,
});

const middlewareReducer = (reducer) => (state, action) => {
  return reducer(state, action);
};

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

const store = createStore(
  middlewareReducer(reducer),
  composeEnhancers(applyMiddleware(...middlewareRouter))
);

export default store;
