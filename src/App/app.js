/**
 * project mygame
 */
import React from 'react';
import StartPage from '../UI/StartPage/startPage';
import GameContainer from '../Containers/gameContainer';
import { fetchOnClose } from '../HelperFunctions/fetches';
import './app.scss';

class App extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="main-wrapper">
                {
                    this.props.app.startGame
                        ? <GameContainer />
                        : <StartPage />
                }
            </div>
        );
    }
}

export default App;
