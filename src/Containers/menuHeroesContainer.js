/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import HeroesHall from '../UI/Game/HeroesMenu/heroesMenu';
import {
    setTimeLimit,
    setDifficulty,
} from '../Actions/ActionCreators/gameActions';
import { saveName, saveImage } from '../Actions/ActionCreators/heroActions';

const HeroesHallContainer = connect(
    null,
    dispatch => ({
        setTimeLimit(demo) {
            dispatch(setTimeLimit(demo));
        },
        setHeroImage(demo) {
            dispatch(saveImage(demo));
        },
        setDifficulty(demo) {
            dispatch(setDifficulty(demo));
        },
        setHeroName(demo) {
            dispatch(saveName(demo));
        },
    }),
)(HeroesHall);

export default HeroesHallContainer;
