/**
 * project WizBattle.
 */
import AT from '../actionTypes';

export const saveImage = (image) => {
    return {
        type: AT.SET_HERO_IMAGE,
        image,
    };
};

export const saveHero = hero => {
    return {
        type: AT.SAVE_HERO,
        hero,
    };
};

export const saveName = (nickName) => {
    return {
        type: AT.SET_HERO_NAME,
        nickName,
    };
};

export const deleteItem = (item) => {
    return {
        type: AT.DELETE_HERO_ITEM,
        item,
    };
};

export const addItem = (item) => {
    return {
        type: AT.ADD_HERO_ITEM,
        item,
    };
};

export const addSpell = (spell) => {
    return {
        type: AT.ADD_HERO_SPELL,
        spell,
    };
};

export const levelUp = () => {
    return {
        type: AT.LEVEL_UP,
    };
};

export const setExperience = (experience) => {
    return {
        type: AT.SET_EXPERIENCE,
        experience,
    };
};

export const setMonstersDefeated = (monstersDefeated) => {
    return {
        type: AT.SET_MONSTERS_DEFEATED,
        monstersDefeated,
    };
};

export const setBattlesWin = () => {
    return {
        type: AT.SET_BATTLES_WIN,
    };
};

export const setBattlesLost = () => {
    return {
        type: AT.SET_BATTLES_LOST,
    };
};

export const setTaskResolved = () => {
    return {
        type: AT.SET_TASKS_RESOLVED,
    };
};

export const setTaskFailed = (taskFailed) => {
    return {
        type: AT.SET_TASKS_FAILED,
        taskFailed,
    };
};
