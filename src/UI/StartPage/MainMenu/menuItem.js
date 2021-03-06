/**
 * project WizBattle
 */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './menuItem.scss';

const MenuItem = (props) => {
    return (
        <HashLink
            to={props.href}
            className={props.className}
        >
            {props.name}
        </HashLink>);
};

export default MenuItem;
