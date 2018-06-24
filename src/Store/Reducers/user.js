/**
 * project smartWizBattle
 */
import AT from '../../Controllers/actionTypes';

const user = (state = {}, action = { type: null }) => {
    if (action.type === AT.SAVE_USER)
        return {
            email: action.email,
            password: action.password,
        };
    return state;
};

export default user;
