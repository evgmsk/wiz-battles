/**
 * project WizBattle
 */
import React from 'react';
import { MainRoutes } from '../../../ConstsData/constants';
import MenuItem from './menuItem';
import './mainMenu.scss';

const menu = Object.values(MainRoutes);
const MainMenu = () => {
    const hash = window.location.hash.slice(1);
    return (
        <nav className="menu-wrapper">
            {
                menu.map((x, i) => {
                    const className = x.path !== (hash || '/') ? 'main-menu-item' : 'main-menu-item menu-item-active';
                    return <MenuItem
                        key={i}
                        href={x.path}
                        name={x.title}
                        className={className}
                    />;
                })
            }
        </nav>
    );
};

export default MainMenu;
