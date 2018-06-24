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

export const onOverwriteShape = (data) => {
    return ({
        type: AT.OVERWRITE_SHAPE,
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

export const onSaveSprite = (data) => {
    return ({
        type: AT.SAVE_SPRITE,
        name: data.name,
        nodeType: data.nodeType,
        image: data.image,
    });
};
export const onSavePlayer = (data) => {
    return ({
        type: AT.SAVE_PLAYER,
        name: data.name,
        nodeType: data.nodeType,
        image: data.image,
    });
};

export const onSaveEffect = (data) => {
    return ({
        type: AT.SAVE_EFFECT,
        name: data.name,
        nodeType: data.nodeType,
        image: data.image,
    });
};
