/**
 * project smartWizBattle
 */

import AT from '../../Controllers/actionTypes';

const game = (state = {}, action) => {
    if (action.type === AT.GO_TO_GAME)
        return ({
            ...state,
            openGame: action.openGame,
        });
    if (action.type === AT.FETCH_DATA)
        return ({
            ...state,
            gameData: action.gameData,
        });
    return state;
};

export default game;
/*
export const gameData = (state = {}, action) => {
    if (action.type === AT.FETCH_DATA)
        return ({
            ...state,
            gameData: action.gameData,
        });
    return state;
};
*/
