/**
 * project smartWizBattle
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import game from './Reducers/gameReducers';
import hero from './Reducers/heroRedusers';
import { gameData, savedShapes } from './Reducers/gameData';
import app from './Reducers/appReducers';
import initialState from './initialState';

const saver = store => next => action => {
    const result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
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

const storeFactory = (data = initialState) =>
    applyMiddleware(logger)(createStore)(
        combineReducers({ hero, game, gameData, app, savedShapes }),
        localStorage['redux-store'] ?
            JSON.parse(localStorage['redux-store']) :
            data,
    );

// const store = storeFactory();

export default storeFactory;
