import React from 'react';
import {draw, squares, turn, winner} from "./actions";
import {useDispatch} from "react-redux";
import {patterns} from "./patters";
import {store} from "./index";


const Square = ({number}) => {
    const dispatch = useDispatch();

    const onClickHandler = (number) => {
        if (store.getState().squares[number] !== '') {
            return;
        }

        let filledSquares = [...store.getState().squares];
        filledSquares[number] = store.getState().turn;

        if (store.getState().turn === 'X') {
            dispatch(turn('O'));
        } else {
            dispatch(turn('X'));
        }

        findWinner(filledSquares);
        dispatch(squares(filledSquares));
    }


    const findWinner = (squaresData) => {
        for (let pattern in patterns) {
            patterns[pattern].forEach((element) => {
                if (
                    squaresData[element[0]] === squaresData[element[1]] &&
                    squaresData[element[0]] === squaresData[element[2]]
                ) {
                   return dispatch(winner(squaresData[element[0]]));
                }

                for (let i = 0; i < 9; i++) {
                    if (squaresData[i] === '') {
                        return;
                    }
                }
                return dispatch(draw('DRAW'));

            });

        }
    }
    return (
        <div className="square" onClick={() => {
            onClickHandler(number);
        }}>
            {store.getState().squares[number]}
        </div>
    );
};

export default Square;


