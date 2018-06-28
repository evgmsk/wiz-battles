/**
 * project smartWizBattle
 */
import React from 'react';
import './spinner.scss'

const Spinner = props => {
    return (
        <div className="spinner">
            <div className="spinner-circle">
                <div className="spinner-circle-center" />
            </div>
        </div>
    )
};

export default Spinner;
