/**
 * project WizBattle
 */
import React from 'react';
import Speaker from 'react-icons/lib/ti/volume';
import onSound from '../../../HelperFunctions/speaker';
import { Langs } from '../../../Consts/constants';

class Expression extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speechRate: 0.5,
        };
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        onSound('', Langs.en);
    }
    onClick(e) {
        e.stopPropagation();
        const { text } = this.props;
        let { speechRate } = this.state;
        onSound(text, Langs.en, speechRate);
        speechRate = speechRate === 1 ? 0.5 : 1;
        this.setState({ speechRate });
    }
    render() {
        const { showAnswer, sound, text, possibleAnswers } = this.props;
        return (
            <div className="task-expression">
                <p>{
                    showAnswer ? possibleAnswers.map((x, i) => {
                        const innerText = i === possibleAnswers.length - 1 ? x : `${x},`;
                        return <span className="possible-answers" key={i}>{innerText} </span>;
                    }) : text}
                </p>
                {sound
                    ? <button
                        className="sound-expression"
                        onClick={this.onClick}
                    >
                        <Speaker />
                      </button>
                    : <span />
                }
            </div>
        );
    }
}

export default Expression;
