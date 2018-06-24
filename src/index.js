import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Containers/appContainer';
import storeFactory from './Store';
import './reset.scss';
import './GameFunctions/TaskGenerators/langaugeTaskGenerator';
import { onSaveMonster } from '../src/Actions/ActionCreators/drawActions';
import Monsters from './Data/monsters.json';

const store = storeFactory();

const shapes = Object.values(Monsters);

if (shapes.length)
    shapes.forEach(s => store.dispatch(onSaveMonster(s)));
console.log(store.getState());

const target = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
                    <AppContainer />
                </Provider>, target);
