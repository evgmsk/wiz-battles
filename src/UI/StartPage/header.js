/**
 * project WizBattle
 */
import React from 'react';
import Menu from './MainMenu/mainMenu';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <Menu />
        </header>
    );
};

export default Header;
