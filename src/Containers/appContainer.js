/**
 * project WizBattle.
 */
import { connect } from 'react-redux';
import App from '../App/app';

const AppContainer = connect(
    state => ({
        app: state.app,
    }),
)(App);

export default AppContainer;
