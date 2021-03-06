/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import GamePage from '../UI/StartPage/GamePage';
import { goToGame } from '../Actions/ActionCreators/appActions';

const GamePageContainer = connect(
    state => ({
            nickName: state.hero.nickName,
        }),
    dispatch => ({
        goToGame(input) {
            dispatch(goToGame(input));
        },
    }),
)(GamePage);

export default GamePageContainer;
