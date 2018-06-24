/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import DrawBox from '../UI/DrawBox/drawBox';
import {
    onSaveShape,
    onSaveMonster,
    onSavePlayer,
    onSaveSprite,
    onSaveEffect,
    onOverwriteShape,
} from '../Actions/ActionCreators/drawActions';

const DrawBoxContainer = connect(
    state => ({
        savedShapes: state.savedShapes,
    }),
    dispatch => ({
        saveShape(data) {
            dispatch(onSaveShape(data));
        },
        overwriteShape(data) {
            dispatch(onOverwriteShape(data));
        },
        saveMonster(data) {
            dispatch(onSaveMonster(data));
        },
        savePlayer(data) {
            dispatch(onSavePlayer(data));
        },
        saveSprite(data) {
            dispatch(onSaveSprite(data));
        },
        saveEffect(data) {
            dispatch(onSaveEffect(data));
        },
    }),
)(DrawBox);

export default DrawBoxContainer;
