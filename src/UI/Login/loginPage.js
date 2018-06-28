/**
 * project WizBattle.
 */
import React from 'react';
import LogForm from '../../Containers/logFormContainer';
import './loginPage.scss';

const LogPage = props => {
    return (
            <div className="log-page">
                <h2>Пожалуйста зарегистрируйтесь</h2>
                <LogForm showForm history={props.history} />
            </div>
        );
};

export default LogPage;
