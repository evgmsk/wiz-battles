/**
 * project WizBattle.
 */
import React from 'react';

class GamePage extends React.Component {
    componentDidMount() {
        if (this.props.nickName)
            this.props.goToGame({ startGame: true });
        else
            this.props.history.push('/login');
    }
    render() {
        return <div />;
    }
}

export default GamePage;
