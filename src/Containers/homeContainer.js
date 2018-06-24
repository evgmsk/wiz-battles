/**
 * project WizBattle
 */
import { connect } from 'react-redux';
import Home from '../UI/StartPage/Home/homePage';

const HomeContainer = connect(
    state => ({
        nickName: state.hero.nickName,
    }),
)(Home);

export default HomeContainer;
