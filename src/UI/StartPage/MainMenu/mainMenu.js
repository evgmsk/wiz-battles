/**
 * project WizBattle
 */
import React from 'react';
import { MainRoutes } from '../../../Consts/constants';
import MenuItem from './menuItem';
import './mainMenu.scss';

const menu = Object.values(MainRoutes);
const MainMenu = () => {
    return (
        <div className="menu-wrapper">
            {
                menu.map((x, i) => {
                    return <MenuItem key={i} href={x.path} name={x.title} />;
                })
            }
        </div>
    );
};

export default MainMenu;
