/**
 * project WizBattle
 */
import AT from '../../Controllers/actionTypes';

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

export const shapes = (state = [], action) => {
    if (action.type === AT.SAVE_SHAPE)
        return ([
            ...state,
            shape({}, action),
        ]);
    if (action.type === AT.OVERWRITE_SHAPE)
        return state.map(sh => shape(sh, action));
    return state;
};

export const sprites = (state = [], action) => {
    if (action.type === AT.SAVE_SPRITE)
        return ([
            ...state,
            { name: action.name, nodeType: action.nodeType, image: action.image },
        ]);
    return state;
};

export const players = (state = [], action) => {
    if (action.type === AT.SAVE_PLAYER)
        return ([
            ...state,
            { name: action.name, nodeType: action.nodeType, image: action.image },
        ]);
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

export const effects = (state = [], action) => {
    if (action.type === AT.SAVE_EFFECT)
        return ([
            ...state,
            { name: action.name, nodeType: action.nodeType, image: action.image },
        ]);
    return state;
};

export const images = (state = {}, action) => {
    switch (action.type) {
        case AT.SAVE_MONSTER:
            return {
                ...state,
                monsters: monsters(state.monsters || [], action),
            };
        case AT.SAVE_PLAYER:
            return {
                ...state,
                players: players(state.players || [], action),
            };
        case AT.SAVE_SPRITE:
            return {
                ...state,
                sprites: sprites(state.sprites || [], action),
            };
        case AT.SAVE_EFFECT:
            return {
                ...state,
                effects: effects(state.effects || [], action),
            };
        default:
            return state;
    }
};
