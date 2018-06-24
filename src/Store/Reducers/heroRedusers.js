/**
 * project smartWizBattle
 */
import AT from '../../Actions/actionTypes';

const SubjectLevel = (state = {}, action) => {
    switch (action.type) {
        case (AT.SET_HERO_MATH_LEVEL):
            return {
                ...state,
                mathLevel: action.mathLevel,
            };
        case (AT.SET_HERO_ENGLISH_LEVEL):
            return {
                ...state,
                englishLevel: action.englishLevel,
            };
        default:
            return state;
    }
};
const tasksResolved = (state = 0, action) => {
    if (AT.SET_TASKS_RESOLVED === action.type)
        return state + 1;
    return state;
};

const tasksFailed = (state = [], action) => {
    if (AT.SET_TASKS_FAILED === action.type)
        return [
            ...state,
            action.taskFailed,
        ];
    return state;
};

const hero = (state = {}, action) => {
    switch (action.type) {
        case (AT.SET_HERO_IMAGE):
            return {
                ...state,
                image: action.image,
            };
        case (AT.SET_HERO_NAME):
            return {
                ...state,
                nickName: action.nickName,
            };
        case (AT.LEVEL_UP):
            return {
                ...state,
                level: state.level + 1,
            };
        case (AT.SET_BATTLES_WIN):
            return {
                ...state,
                battleWin: action.battlesWin,
            };
        case (AT.SET_MONSTERS_DEFEATED):
            return {
                ...state,
                monstersDefeated: action.monstersDefeated,
            };
        case (AT.SET_TASKS_RESOLVED):
            return {
                ...state,
                tasksResolved: tasksResolved(state.tasksResolved, action),
            };
        case (AT.SET_TASKS_FAILED):
            return {
                ...state,
                tasksResolved: tasksFailed(state.tasksFailed, action),
            };
        case (AT.SET_EXPERIENCE):
            return {
                ...state,
                experience: action.experience,
            };
        default:
            return state;
    }
};

export default hero;
