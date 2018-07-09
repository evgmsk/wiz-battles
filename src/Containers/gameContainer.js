/**
 * project WizBattle.
 */
import { connect } from 'react-redux';
import Game from '../UI/Game/Game';
import {
    setScene,
    toStartBattle,
    setBattle,
    setPVP,
    setOpponent,
    setPlayer,
    setPlayerMove,
    resetGameHero,
} from '../Actions/ActionCreators/gameActions';
import { goToGame } from '../Actions/ActionCreators/appActions';

const GameContainer = connect(
    state => ({
        ...state,
    }),
    dispatch => ({
        resetHero(hero) {
            dispatch(resetGameHero(hero));
        },
        setPlayerMove(move) {
            dispatch(setPlayerMove(move));
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
        setPlayer(player) {
            dispatch(setPlayer(player));
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
