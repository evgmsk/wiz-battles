/**
 * project WizBattle.
 */
import React from 'react';
import {FaGithubSquare as Git} from 'react-icons/fa';
import HeadImage from '../../images/title.png';
import { pause } from '../../HelperFunctions/pause';
import { Timeouts } from '../../ConstsData/constants';
import './homePage.scss';

class HomePage extends React.Component {
    componentDidMount() {
        pause(Timeouts.onDataLoaded).then(() => this.props.dataLoaded(true));
    }
    render() {
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
    }
}

export default HomePage;
