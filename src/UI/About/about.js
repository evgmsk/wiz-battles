/**
 * project WizBattle.
 */
import React from 'react';
import FirstScreen from '../../images/screenshots/scr1.jpg';
import SecondScreen from '../../images/screenshots/scr2.jpg';
import ThirdScreen from '../../images/screenshots/scr3.jpg';
import ForthScreen from '../../images/screenshots/scr4.jpg';
import './about.scss';

class About extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.dataLoaded(true), 100);
    }
    render() {
        return (
            <section className="about">
                <h1>Учеба как незабываемое приключение</h1>
                <h2>Cкриншоты игры</h2>
                <div className="screenshots-wrapper">
                    <figure className="game-screenshots">
                        <img src={FirstScreen} alt="" />
                        <figcaption>Магическая атака - магия льда</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={SecondScreen} alt="" />
                        <figcaption>Магическая атака - магия жизни</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={ThirdScreen} alt="" />
                        <figcaption>Магическая атака - магия огня</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={ForthScreen} alt="" />
                        <figcaption>Магическая атака - магия воды</figcaption>
                    </figure>
                </div>
            </section>
        );
    }
}

export default About;
