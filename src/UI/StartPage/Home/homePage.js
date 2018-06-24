/**
 * project WizBattle.
 */
import React from 'react';
import Login from '../../../Containers/logFormContainer';
import GamePage from '../../../Containers/gamePageContainer';
import HeadImage from '../../../images/title.png';
import './homePage.scss';

const HomePage = props => {
    return (
        <section className="home-section">
            <img src={HeadImage} alt="WizBattle" />
            {props.nickName ? <GamePage /> : <Login />}
        </section>
    );
};

export default HomePage;
