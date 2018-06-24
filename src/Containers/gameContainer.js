/**
 * project WizBattle.
 */
import { connect } from 'react-redux';
import Game from '../UI/Game/game';
import {
    setScene,
    toStartBattle,
    setBattle,
    setPVP,
    setOpponent,
    setTimeLimit,
    setPlayer,
    setDifficulty,
    setDemo,
} from '../Actions/ActionCreators/gameActions';
import {
    saveName,
    saveImage,
} from '../Actions/ActionCreators/heroActions';
import { goToGame } from '../Actions/ActionCreators/appActions';

const GameContainer = connect(
    state => ({
        ...state,
    }),
    dispatch => ({
        setDemo(demo) {
            dispatch(setDemo(demo));
        },
        goToGame(show) {
            dispatch(goToGame(show));
        },
        setScene(scene) {
            dispatch(setScene(scene));
        },
        setBattle(battle) {
            dispatch(setBattle(battle));
        },
        setOpponent(opponent) {
            dispatch(setOpponent(opponent));
        },
        setDifficulty(difficulty) {
            dispatch(setDifficulty(difficulty));
        },
        setPlayer(player) {
            dispatch(setPlayer(player));
        },
        setTimeLimit(limit) {
            dispatch(setTimeLimit(limit));
        },
        setPvp(pvp) {
            dispatch(setPVP(pvp));
        },
        toBattle(battle) {
            dispatch(toStartBattle(battle));
        },
    }),
)(Game);

export default GameContainer;
