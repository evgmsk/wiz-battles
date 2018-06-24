/**
 * project smartWizBattle
 */

import AT from '../../Controllers/actionTypes';

const loginForm = (state = {}, action) => {
    if (action.emailValid !== undefined)
        return {
            ...state,
            emailValid: action.emailValid,
        };
    if (action.passwordValid !== undefined)
        return {
            ...state,
            passwordValid: action.passwordValid,
        };
    if (action.type === AT.OPEN_LOGIN_FORM) {
        return {
            ...state,
            showForm: action.showForm,
        };
    }
    return state;
};

export default loginForm;
