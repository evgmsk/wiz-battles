/**
 * project WizBattle
 */
import AT from '../actionTypes';

export const goToGame = (data) => {
    return ({
        type: AT.GO_TO_GAME,
        startGame: data.startGame,
    });
};

export const dataLoaded = data => {
    return ({
        type: AT.DATA_LOADED,
        dataLoaded: data,
    });
};

export const verifyUser = (user) => {
    return {
        type: AT.CHECK_USER,
        userVerified: user.userVerified,
    };
};

export const checkInput = ({ emailValid, passwordValid }) => {
    return emailValid !== undefined ? ({
        type: AT.CHECK_INPUT,
        emailValid,
    }) : ({
        type: AT.CHECK_INPUT,
        passwordValid,
    });
};

export const openForm = ({ showForm }) => {
    return ({
        type: AT.OPEN_LOGIN_FORM,
        showForm,
    });
};
