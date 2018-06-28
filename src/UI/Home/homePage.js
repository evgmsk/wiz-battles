/**
 * project WizBattle.
 */
import React from 'react';
import Git from 'react-icons/lib/fa/github-square';
import HeadImage from '../../images/title.png';
import './homePage.scss';

const HomePage = props => {
    return (
        <section className="home-section">
            <img src={HeadImage} alt="WizBattle" />
            <div className="home-wrapper">
                <h1>WizBattles - Учеба как незабываемое приключение</h1>
                <div className="game-description">
                    Разработчик: Евгений Москвич
                    <a href="https://github.com/evgmsk/" rel="noopener noreferrer" target="_blank" ><Git /></a>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
