/**
 * project smartWizBattle
 */
import AT from '../../Controllers/actionTypes';

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

export const box = (state = {}, action) => {
    if (action.type === AT.SET_DRAW_BOX_WIDTH)
        return ({
            ...state,
            drawWidth: action.drawWidth,
        });
    if (action.type === AT.SET_DRAW_BOX_HEIGHT)
        return ({
            ...state,
            drawHeight: action.drawHeight,
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
    if (action.type === AT.SET_DRAW_BOX_WIDTH)
        return ({
            ...state,
            box: box(state.box, action),
        });
    if (action.type === AT.SET_DRAW_BOX_HEIGHT)
        return ({
            ...state,
            box: box(state.box, action),
        });
    return state;
};
