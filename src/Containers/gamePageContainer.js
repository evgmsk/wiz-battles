/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import GamePage from '../UI/StartPage/gamePage';
import { goToGame } from '../Actions/ActionCreators/appActions';

const GamePageContainer = connect(
    null,
    dispatch => ({
        goToGame(input) {
            dispatch(goToGame(input));
        },
    }),
)(GamePage);

export default GamePageContainer;
