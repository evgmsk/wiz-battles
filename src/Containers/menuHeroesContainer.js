/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import HeroesHall from '../UI/Game/HeroesMenu/HeroesMenu';
import {
    setTimeLimit,
    setDifficulty,
} from '../Actions/ActionCreators/gameActions';
import { saveName, saveImage } from '../Actions/ActionCreators/heroActions';

const HeroesHallContainer = connect(
    state => ({
        nickName: state.hero.nickName,
    }),
    dispatch => ({
        setTimeLimit(time) {
            dispatch(setTimeLimit(time));
        },
        setHeroImage(image) {
            dispatch(saveImage(image));
        },
        setDifficulty(demo) {
            dispatch(setDifficulty(demo));
        },
        setHeroName(name) {
            dispatch(saveName(name));
        },
    }),
)(HeroesHall);

export default HeroesHallContainer;
