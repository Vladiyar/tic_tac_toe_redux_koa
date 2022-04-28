// export const turn = (character) => {
//     return{
//         type: 'TURN',
//         payload: character,
//     };
// };
//
// export const winner = (player) => {
//     return{
//         type: 'WINNER',
//         payload: player,
//     }
// }
//
// export const draw = () => {
//     return{
//         type: 'DRAW',
//     }
// }
//
// export const squares = (arr) => {
//     return{
//         type: 'SQUARES',
//         payload: arr,
//     }
// }

import {createAction} from "redux-actions";

export const turn = createAction('TURN', (character) => {
    return {
        payload: character

    }
})

export const winner = createAction('WINNER', (player) => {
    return {
        payload: player

    }
})

export const squares = createAction('SQUARES', (arr) => {
    return {
        payload: arr

    }
})

export const draw = createAction('DRAW')




