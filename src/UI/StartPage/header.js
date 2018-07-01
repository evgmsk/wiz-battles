/**
 * project WizBattle
 */
import React from 'react';
import Menu from './MainMenu/mainMenu';
import './header.scss';

class Header extends React.Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        return (
            <header className="header">
                <Menu />
            </header>
        );
    }
}

export default Header;
