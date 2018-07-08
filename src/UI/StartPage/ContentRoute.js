/**
 * project WizBattle
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DrawBoxContainer from '../../Containers/drawBoxContainer';
import Home from '../../Containers/homeContainer';
import About from '../../Containers/aboutContainer';
import GamePageContainer from '../../Containers/gamePageContainer';
import LogPage from '../../Containers/logPageContainer';
import { MainRoutes } from '../../ConstsData/constants';

const StartPageRoute = () =>
        <Switch>
            <Route exact path={MainRoutes.HOME.path} component={Home} />
            <Route exact path={MainRoutes.DRAWBOX.path} component={DrawBoxContainer} />
            <Route exact path={MainRoutes.LOGIN.path} component={LogPage} />
            <Route exact path={MainRoutes.ABOUT.path} component={About} />
            <Route exact path={MainRoutes.GAME.path} component={GamePageContainer} />
        </Switch>;

export default StartPageRoute;
