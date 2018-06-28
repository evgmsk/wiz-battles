/**
 * project WizBattle.
 */
import React from 'react';

class GamePage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log(this.props)
        if (this.props.nickName)
            this.props.goToGame({ startGame: true });
        else
            this.props.history.push('/login')
    }
    render() {
        return <div />;
    }
}

export default GamePage;
