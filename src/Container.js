import React from 'react';
import Square from "./Square";
import {useDispatch, useSelector} from "react-redux";
import {squares, winner, draw, turn} from "./actions";
import {store} from "./index";


const Container = () => {
    const currentTurn = useSelector(state => state.turn);
    const dispatch = useDispatch();

    const onRestartHandler = () => {
        dispatch(squares(Array(9).fill('')));
        dispatch(winner(''));
        dispatch(draw(''));
        dispatch(turn('X'))
}
    
    let arrayOfSquares = []
    for (let i = 0; i < 9; i++) {
        arrayOfSquares.push(<Square key={i} number={i}/>)
    }

    return (
        <div>
            <div className='turn-result'>
                <h2>Turn: {currentTurn}</h2>
                {store.getState().winner.length === 1 && (
                    <div className="winner">
                        <h2>{store.getState().winner} won</h2>
                        <button onClick={onRestartHandler}>Play again</button>
                    </div>
                )}
                {store.getState().draw === 'draw' && (
                    <div className="draw">
                        <h2>Draw</h2>
                        <button onClick={onRestartHandler}>Play again</button>
                    </div>
                )}
            </div>
            <div className="container">
                {arrayOfSquares}
            </div>
        </div>
    );
};

export default Container;