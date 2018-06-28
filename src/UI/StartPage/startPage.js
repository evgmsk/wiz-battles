/**
 * project WizBattle
 */
import React from 'react';
import { HashRouter } from 'react-router-dom';
import StartPageRoute from './contentRoute';
import Header from './header';
import Spinner from '../Spinner/spinnerUI';
import './startPage.scss';

class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
        };
        this.onLoad = this.onLoad.bind(this);
    }
    onLoad() {
       if (!(this.props.startGame || window.location.hash === '#/game')) {
           setTimeout(() => this.setState({ spinner: false }), 0);
       }
    }
    render() {
        return (
            <HashRouter>
                <div>
                    {this.state.spinner ? <Spinner /> : <div className="display-none" />}
                    <div className="start-page-wrapper" >
                        <Header onLoad={this.onLoad} />
                        <StartPageRoute />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default StartPage;
