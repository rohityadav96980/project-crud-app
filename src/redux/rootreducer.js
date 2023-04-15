import { combineReducers } from "redux";
import reducer from "./reducer";

const rootreducer = combineReducers(
    {
        users:reducer
    });

export default rootreducer;