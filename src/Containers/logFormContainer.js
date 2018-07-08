/**
 * project smartWizBattle
 */
import { connect } from 'react-redux';
import LogForm from '../UI/Login/LogFormUI';
import { checkInput } from '../Actions/ActionCreators/appActions';
import { saveHero } from '../Actions/ActionCreators/heroActions';

const Login = connect(
    state => ({
        loginForm: state.app.loginForm,
        name: state.hero.nickName,
    }),
    dispatch => ({
        onBlur(input) {
            dispatch(checkInput(input));
        },
        saveHero(hero) {
            dispatch(saveHero(hero));
        },
    }),
)(LogForm);

export default Login;
