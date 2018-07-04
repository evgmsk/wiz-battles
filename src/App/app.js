/**
 * project mygame
 */
import React from 'react';
import StartPage from '../UI/StartPage/startPage';
import GameContainer from '../Containers/gameContainer';
import './app.scss';

const App = props => {
    return (
        <div className="main-wrapper">
            {
                props.app.startGame
                    ? <GameContainer />
                    : <StartPage {...props} />
            }
        </div>
    );
};

export default App;
