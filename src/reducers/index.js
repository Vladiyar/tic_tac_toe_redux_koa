import {combineReducers} from 'redux';
import resultReducer from "./result";
import squaresReducer from "./squares";
import turnReducer from "./turn";
import {handleAction} from "redux-actions";
import turn from "./turn";
import squares from "./squares";
import {draw, winner} from "../actions";

const allReducers = handleAction({
    [turn]: turnReducer,
    [draw]: resultReducer,
    [winner]: resultReducer,
    [squares]: squaresReducer,

})

export default allReducers;