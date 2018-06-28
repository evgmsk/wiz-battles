/**
 * project smartWizBattle
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import game from './Reducers/gameReducers';
import hero from './Reducers/heroRedusers';
import { gameData, savedShapes } from './Reducers/gameData';
import app from './Reducers/appReducers';
import initialState from './initialState';
import AT from '../Actions/actionTypes';

const saver = store => next => action => {
    const result = next(action);
    if (action.type === AT.START_BATTLE
        || action.type === AT.SAVE_SHAPE
        || action.type === AT.SET_HERO_NAME) {
        const state = store.getState();
        localStorage['redux-store'] = JSON.stringify({ hero: state.hero, savedShapes: state.savedShapes });
    }
    return result;
};
const logger = store => next => action => {
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};
const initialData = initialState;
if (localStorage['redux-store']) {
    const Hero = JSON.parse(localStorage['redux-store']).hero;
    const SavedShapes = JSON.parse(localStorage['redux-store']).savedShapes;
    if (hero)
        initialData.hero = Hero;
    if (savedShapes)
        initialData.savedShapes = SavedShapes;
}
const storeFactory = (data = initialData) =>
    applyMiddleware(saver)(createStore)(
        combineReducers({ hero, game, gameData, app, savedShapes }),
            data,
    );

export default storeFactory;
