import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootreducer from "./rootreducer";

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store=createStore(rootreducer, applyMiddleware(...middlewares));

export default store;