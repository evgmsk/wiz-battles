/**
 * project WizBattle.
 */
import { connect } from 'react-redux';
import GameMenu from '../UI/Game/GameMenu/GameMenu';
import { setMusicVolume, setSoundsVolume } from '../Actions/ActionCreators/gameActions';

const GameMenuContainer = connect(
    state => ({
        musicVolume: state.game.musicVolume,
        soundsVolume: state.game.soundsVolume,
    }),
    dispatch => ({
        setMusicVolume(volume) {
            dispatch(setMusicVolume(volume));
        },
        setSoundsVolume(volume) {
            dispatch(setSoundsVolume(volume));
        },
    }),
)(GameMenu);

export default GameMenuContainer;
