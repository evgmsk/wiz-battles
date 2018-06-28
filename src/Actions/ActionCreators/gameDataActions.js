/**
 * project WizBattle.
 */
import AT from '../actionTypes';

export const onSaveShape = (data) => {
    return ({
        type: AT.SAVE_SHAPE,
        name: data.name,
        nodeType: data.nodeType,
        image: data.image,
    });
};

export const onSaveMonster = (data) => {
    return ({
        type: AT.SAVE_MONSTER,
        name: data.name,
        nodeType: data.nodeType,
        image: data.image,
    });
};
