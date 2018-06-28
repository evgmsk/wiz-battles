/**
 * project WizBattle.
 */
import { connect } from 'react-redux';
import Battle from '../UI/Game/Battle/battle';
import {
    setTask,
    setOpponentHealth,
    setPlayerHealth,
    setPlayerMove,
    setPlayerLevel,
    setOpponentSpell,
    setPlayerSpell,
    toStartBattle,
    setPlayerExperience,
    setOpponentExperience,
} from '../Actions/ActionCreators/gameActions';
import {
    addItem,
    setBattlesWin,
    setExperience,
    levelUp,
    setMonstersDefeated,
    setTaskResolved,
    setTaskFailed,
    saveName,
} from '../Actions/ActionCreators/heroActions';

const BattleContainer = connect(
    state => ({
        battle: state.game.battle,
        hero: state.hero,
        monsters: state.gameData.monsters,
        musicVolume: state.game.musicVolume,
        soundsVolume: state.game.soundsVolume,
    }),
    dispatch => ({
        startBattle(battle) {
            dispatch(toStartBattle(battle));
        },
        setPlayerExperience(experience) {
            dispatch(setPlayerExperience(experience));
        },
        setHeroName(name) {
            dispatch(saveName(name));
        },
        setOpponentExperience(experience) {
            dispatch(setOpponentExperience(experience));
        },
        setTask(task) {
            dispatch(setTask(task));
        },
        setOpponentSpell(effect) {
            dispatch(setOpponentSpell(effect));
        },
        setPlayerSpell(effect) {
            dispatch(setPlayerSpell(effect));
        },
        setOpponentHealth(health) {
            dispatch(setOpponentHealth(health));
        },
        setBattlesWin(battle) {
            dispatch(setBattlesWin(battle));
        },
        setPlayerLevel(level) {
            dispatch(setPlayerLevel(level));
        },
        setMonstersDefeated(monsters) {
            dispatch(setMonstersDefeated(monsters));
        },
        setExperience(experience) {
            dispatch(setExperience(experience));
        },
        levelUp() {
            dispatch(levelUp());
        },
        addItem(item) {
            dispatch(addItem(item));
        },
        setPlayerHealth(health) {
            dispatch(setPlayerHealth(health));
        },
        setPlayerMove(move) {
            dispatch(setPlayerMove(move));
        },
        setTaskResolved(task) {
            dispatch(setTaskResolved(task));
        },
        setTaskFailed(task) {
            dispatch(setTaskFailed(task));
        },
    }),
)(Battle);

export default BattleContainer;
