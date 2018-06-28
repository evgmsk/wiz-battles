/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import MainMenu from '../UI/StartPage/MainMenu/mainMenu';
import { closeStatePage, goToGame } from '../Controllers/Actions/menuActions';

const MenuContainer = connect(
    null,
    dispatch => ({
        goToGame(input) {
            dispatch(goToGame(input));
        },
        closeStartPage(input) {
            dispatch(closeStatePage(input));
        },
    }),

)(MainMenu);

export default MenuContainer;
