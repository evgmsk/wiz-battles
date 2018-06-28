/**
 * project WizBattle
 */
import AT from '../../Actions/actionTypes';

export const shape = (state = {}, action) => {
    if (action.type === AT.OVERWRITE_SHAPE) {
        return state.name === action.name
            ? {
                ...state,
                image: action.image,
                nodeType: action.nodeType,
            } : state;
    }
    if (action.type === AT.SAVE_SHAPE)
        return { name: action.name, nodeType: action.nodeType, image: action.image };
    return state;
};

export const savedShapes = (state = [], action) => {
    if (action.type === AT.SAVE_SHAPE)
        return ([
            ...state,
            shape({}, action),
        ]);
    if (action.type === AT.OVERWRITE_SHAPE)
        return state.map(sh => shape(sh, action));
    return state;
};

export const monsters = (state = [], action) => {
    if (action.type === AT.SAVE_MONSTER)
        return ([
            ...state,
            { name: action.name, nodeType: action.nodeType, image: action.image },
        ]);
    return state;
};

export const gameData = (state = {}, action) => {
    switch (action.type) {
        case AT.SAVE_MONSTER:
            return {
                ...state,
                monsters: monsters(state.monsters || [], action),
            };
        default:
            return state;
    }
};
