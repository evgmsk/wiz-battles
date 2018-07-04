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
        || action.type === AT.SET_HERO_NAME
        || action.type === AT.SAVE_HERO) {
        const state = store.getState();
        localStorage['redux-store'] = JSON.stringify({ hero: state.hero, savedShapes: state.savedShapes });
    }
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
const reduxToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

const storeFactory = (data = initialData) =>
    applyMiddleware(saver)(createStore)(
        combineReducers({ hero, game, gameData, app, savedShapes }),
         data, reduxToolsExt && reduxToolsExt(),
    );

export default storeFactory;
