import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import rootReducer from "./reducers";


const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
