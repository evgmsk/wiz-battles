/**
 * project WizBattle
 */
import AT from '../../Actions/actionTypes';

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
    if (action.type === AT.OPEN_LOGIN_FORM)
        return {
            ...state,
            showForm: action.showForm,
        };
    return state;
};

const app = (state = {}, action) => {
    switch (action.type) {
        case (AT.GO_TO_GAME):
            return {
                ...state,
                startGame: action.startGame,
            };
        case (AT.CHECK_USER):
            return {
                ...state,
                userVerified: action.userVerified,
            };
        case (AT.CHECK_INPUT):
                return {
                    ...state,
                    loginForm: loginForm(state.loginForm, action),
                };
        case (AT.OPEN_LOGIN_FORM):
            return {
                ...state,
                loginForm: loginForm(state.loginForm, action),
            };
        default:
            return state;
    }
};

export default app;
