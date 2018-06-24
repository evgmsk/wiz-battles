/**
 * project WizBattle
 */
import React from 'react';
import { MainRoutes } from '../../../Consts/constants';
import MenuItem from './menuItem';
import './mainMenu.scss';

const menu = Object.keys(MainRoutes);

const MainMenu = () => {
    return (
        <div className="menu-wrapper">
            {
                menu.map((x, i) => {
                    return <MenuItem key={i} href={MainRoutes[x]} name={x} />;
                })
            }
        </div>
    );
};

export default MainMenu;
