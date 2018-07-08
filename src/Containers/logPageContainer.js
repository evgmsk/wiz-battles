/**
 * project wiz-battles
 */
import { connect } from 'react-redux';
import Login from '../UI/Login/LoginPage';
import { dataLoaded } from '../Actions/ActionCreators/appActions';

const LoginPage = connect(
    null,
    dispatch => ({
        dataLoaded(data) {
            dispatch(dataLoaded(data));
        },
    }),
)(Login);

export default LoginPage;
