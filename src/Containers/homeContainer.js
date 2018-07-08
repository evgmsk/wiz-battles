/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import Home from '../UI/Home/HomePage';
import { dataLoaded } from '../Actions/ActionCreators/appActions';

const HomeContainer = connect(
    null,
    dispatch => ({
        dataLoaded(data) {
            dispatch(dataLoaded(data));
        },
    }),
)(Home);

export default HomeContainer;
