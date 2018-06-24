/**
 * project WizBattle
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrawBoxContainer from '../../Containers/drawBoxContainer';
import Home from '../../Containers/homeContainer';
import About from './About/about';
import GamePageContainer from '../../Containers/gamePageContainer';
import { MainRoutes } from '../../Consts/constants';

const StartPageRoute = () =>
        <Switch>
            <Route exact path={MainRoutes.HOME} component={Home} />
            <Route exact path={MainRoutes.DRAWBOX} component={DrawBoxContainer} />
            <Route exact path={MainRoutes.ABOUT} component={About} />
            <Route exact path={MainRoutes.GAME} component={GamePageContainer} />
        </Switch>;

export default StartPageRoute;
