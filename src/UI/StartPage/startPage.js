/**
 * project WizBattle
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import ContentRoute from './contentRoute';
import Header from './header';
import Spinner from '../Spinner/spinnerUI';
import './startPage.scss';

const StartPage = props => {
    return (
        <div>
            {props.app.dataLoaded ? <div className="display-none" /> : <Spinner />}
            <HashRouter>
                <div>
                    <div className="start-page-wrapper" >
                        <Header />
                        <ContentRoute />
                    </div>
                </div>
            </HashRouter>
        </div>
    );
};

export default StartPage;
