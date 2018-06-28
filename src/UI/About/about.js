/**
 * project WizBattle.
 */
import React from 'react';
import FirstScreen from '../../images/screenshots/scr1.jpg';
import SecondScreen from '../../images/screenshots/scr2.jpg';
import ThirdScreen from '../../images/screenshots/scr3.jpg';
import ForthScreen from '../../images/screenshots/scr4.jpg';
import './about.scss';

const About = () => {
    return (
            <section className="about">
                <h1>Учеба как незабываемое приключение</h1>
                <h2>Cкриншоты игры</h2>
                <div className="screenshots-wrapper">
                    <figure className="game-screenshots">
                        <img src={FirstScreen} alt="a картинка" />
                        <figcaption>Магическая атака - магия льда</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={SecondScreen} alt="б картинка" />
                        <figcaption>Магическая атака - магия жизни</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={ThirdScreen} alt="в картинка" />
                        <figcaption>Магическая атака - магия огня</figcaption>
                    </figure>
                    <figure className="game-screenshots">
                        <img src={ForthScreen} alt="д картинка" />
                        <figcaption>Магическая атака - магия воды</figcaption>
                    </figure>
                </div>
            </section>
        );
};

export default About;
