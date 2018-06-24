/**
 * project smartWizBattle
 */
import { connect } from 'react-redux';
import LogForm from '../UI/StartPage/Login/logFormUI';
import { checkInput, openForm } from '../Actions/ActionCreators/appActions';
import { saveName } from '../Actions/ActionCreators/heroActions';

const Login = connect(
    state => ({
        loginForm: state.app.loginForm,
    }),
    dispatch => ({
        onBlur(input) {
            dispatch(checkInput(input));
        },
        onSubmit(Name) {
            dispatch(saveName(Name));
        },

    }),
)(LogForm);

export default Login;
