import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/rootSaga";

const sagaMidleWare = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMidleWare))
);
sagaMidleWare.run(rootSaga);
export default store;
