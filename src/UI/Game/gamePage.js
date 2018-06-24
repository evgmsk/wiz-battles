/**
 * project WizBattle.
 */
import React from 'react';

class GamePage extends React.Component {
    componentDidMount() {
        this.props.goToGame({ startGame: true });
    }
    render() {
        return <div />;
    }
}

export default GamePage;
