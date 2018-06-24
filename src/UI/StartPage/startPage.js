/**
 * project WizBattle
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import StartPageRoute from '../StartPage/startPageRoute';
import Header from './header';
import './startPage.scss';

const StartPage = () => {
    return (
        <HashRouter>
            <div className="start-page-wrapper">
                <Header />
                <StartPageRoute />
            </div>
        </HashRouter>
    );
};

export default StartPage;
