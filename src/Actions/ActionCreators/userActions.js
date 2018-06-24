/**
 * project WizBattle.
 */
import AT from '../actionTypes';

export const saveUser = (email, password) => {
    return {
        type: AT.SAVE_USER,
        email,
        password,
    };
};

export const saveName = (nickName) => {
    return {
        type: AT.SET_USER_NAME,
        nickName,
    };
};

export const deleteItem = (item) => {
    return {
        type: AT.DELETE_USER_ITEM,
        item,
    };
};

export const addItem = (item) => {
    return {
        type: AT.ADD_USER_ITEM,
        item,
    };
};

export const addSpell = (spell) => {
    return {
        type: AT.ADD_USER_SPELL,
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

export const setBattlesWin = (battlesWin) => {
    return {
        type: AT.SET_BATTLES_WIN,
        battlesWin,
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
