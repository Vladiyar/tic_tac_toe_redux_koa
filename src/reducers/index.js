import {handleActions} from "redux-actions";
import {draw, winner, turn, squares} from "../actions";


const defaultState = '';




const allReducers = handleActions({
    [turn]: (state, {payload}) => {

        return {
            ...state,
            turn: payload.payload  ? payload.payload : state
        }
    },
    [draw]: (state) => {
        return {
            ...state, draw: 'draw'
        }
    },
    [winner]: (state, {payload}) => {
        return {
            ...state, winner: payload.payload
        }
    },
    [squares]: (state, {payload}) => {
        return {
            ...state, squares: [...payload.payload]
        }
    },

}, defaultState)

export default allReducers;