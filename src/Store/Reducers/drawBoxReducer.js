/**
 * project smartWizBattle
 */
import AT from '../../Actions/actionTypes';

export const brush = (state = {}, action) => {
    if (action.type === AT.SET_BRUSH_COLOR)
        return ({
            ...state,
            brushColor: action.brushColor,
        });
    if (action.type === AT.SET_BRUSH_THICKNESS)
        return ({
            ...state,
            brushThickness: action.brushThickness,
        });
    return state;
};

export const drawBox = (state = {}, action) => {
    if (action.type === AT.SET_BRUSH_COLOR)
        return ({
            ...state,
            brush: brush(state.brush, action),
        });
    if (action.type === AT.SET_BRUSH_THICKNESS)
        return ({
            ...state,
            brush: brush(state.brush, action),
        });
    return state;
};
