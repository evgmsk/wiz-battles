/**
 * project WizBattle.
 */
import React from 'react';
import LogForm from '../../Containers/logFormContainer';
import './loginPage.scss';

class LogPage extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.dataLoaded(true), 100);
    }
    render() {
        return (
            <div className="log-page">
                <h2>Пожалуйста зарегистрируйтесь</h2>
                <LogForm showForm history={this.props.history} />
            </div>
        );
    }
}

export default LogPage;
