/**
 * project wiz-battles
 */
import { connect } from 'react-redux';
import About from '../UI/About/About';
import { dataLoaded } from '../Actions/ActionCreators/appActions';

const HomeContainer = connect(
    null,
    dispatch => ({
        dataLoaded(data) {
            dispatch(dataLoaded(data));
        },
    }),
)(About);

export default HomeContainer;
