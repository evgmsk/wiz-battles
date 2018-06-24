/**
 * project WizBattle
 */
import AT from '../../Controllers/actionTypes';

const startPage = (state = {}, action) => {
    if (action.type === AT.CLOSE_START_PAGE) {
        return ({
            ...state,
            showHome: action.showHome,
        });
    }
    return state;
};

export default startPage;
