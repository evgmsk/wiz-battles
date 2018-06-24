/**
 * project WizBattle
 */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './menuItem.scss';

const MenuItem = (props) => {
    return <HashLink to={props.href} className="main-menu-item">{props.name}</HashLink>;
};

export default MenuItem;
