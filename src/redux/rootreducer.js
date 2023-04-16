import { combineReducers } from "redux";
import reducer from "./reducer";

const rootreducer = combineReducers(
    {
        data: reducer
    });

export default rootreducer;