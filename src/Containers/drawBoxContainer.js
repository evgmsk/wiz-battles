/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import DrawBox from '../UI/DrawBox/DrawBox';
import { onSaveShape } from '../Actions/ActionCreators/gameDataActions';
import { dataLoaded } from '../Actions/ActionCreators/appActions';

const DrawBoxContainer = connect(
    state => ({
        savedShapes: state.savedShapes,
    }),
    dispatch => ({
        saveShape(data) {
            dispatch(onSaveShape(data));
        },
        dataLoaded(data) {
            dispatch(dataLoaded(data));
        },
    }),
)(DrawBox);

export default DrawBoxContainer;
