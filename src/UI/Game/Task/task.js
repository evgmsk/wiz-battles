/**
 * project WizBattle
 */
import React from 'react';
import Description from './description';
import Expression from './expression';
import './task.scss';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variantsShown: false,
            solutionCorrect: false,
            solutionDone: false,
            showAnswer: false,
            buttonValue: 'Проверить решение',
            taskClass: 'task-section',
            answersClass: 'answers-to-select',
            solutionPopUpClass: 'solution-effect',
        };
        this.answerSelect = React.createRef();
        this.answerInput = React.createRef();
        this.showSetAnswers = this.showSetAnswers.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onAnswer = this.onAnswer.bind(this);
    }
    componentDidMount() {
        setTimeout(() => this.showTask(), 100);
    }
    showTask() {
        this.setState({ taskClass: 'task-section active' });
    }
    onSelect(e, answer) {
        e.preventDefault();
        e.stopPropagation();
        this.onAnswer(answer);
    }
    onClick(e) {
        const answer = this.answerInput.current.value;
        e.preventDefault();
        e.stopPropagation();
        if (!this.state.solutionDone && !answer)
            return;
        if (!this.state.solutionDone)
            this.checkAnswer(answer);
        this.onAnswer();
    }
    checkAnswer(answer) {
        const { answersClass, solutionDone } = this.state;
        if (solutionDone)
            return;
        const { possibleAnswers } = this.props;
        const solution = possibleAnswers.filter(x => x.toString() === answer.toString())[0];
        if ((solution || solution === 0) && !solutionDone) {
            const damage = answersClass === 'answers-to-select shown' ? 0.9 : 1;
            this.setState({
                solutionCorrect: true,
                solutionDone: true,
                solutionPopUpClass: 'solution-effect correct',
                buttonValue: 'Произнести заклинание',
            });
            setTimeout(() => this.props.onResolveTask(damage), 3000);
        } else if (!solution) {
            this.setState({
                correctSolution: false,
                solutionDone: true,
                solutionPopUpClass: 'solution-effect fail',
                buttonValue: 'Посмотреть ответ',
            });
            setTimeout(() => this.setState({ solutionPopUpClass: 'solution-effect' }), 2000);
        }
    }
    onAnswer(answer) {
        const { solutionDone, solutionCorrect, buttonValue } = this.state;
        if (!answer && !solutionDone)
            return;
        if (answer && !solutionDone) {
            this.checkAnswer(answer);
        } else if (solutionDone && !solutionCorrect) {
            if (buttonValue === 'Посмотреть ответ')
                this.setState({ buttonValue: 'Вернуться в битву', showAnswer: true });
            else {
                this.props.onResolveTask(0);
            }
        }
    }
    onPressButton(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
        e.stopPropagation();
        if (e.key !== 'Enter')
            return;
        const answer = this.answerInput.current.value;
        if (this.state.solutionDone) {
            this.onAnswer(answer);
        } else if (answer)
            this.checkAnswer(answer);
    }
    showSetAnswers() {
        this.setState({ answersClass: 'answers-to-select shown' });
    }

    render() {
        const { answersToSelect, message, expression, sound } = this.props;
        const { possibleAnswers, difficulty, soundsVolume } = this.props;
        const { solutionCorrect, buttonValue, taskClass, solutionPopUpClass } = this.state;
        const { showAnswer, answersClass } = this.state;
        const solutionPopUpMessage = solutionCorrect ? 'Верно!' : 'Ответ неверен';
        let expressionProps = { showAnswer, sound, text: expression, possibleAnswers };
        expressionProps = { ...expressionProps, difficulty, soundsVolume };
        return (
            <section className={taskClass}>
                <div className="task-wrapper">
                    <div className="task-background">
                        <h2>{this.props.subject}</h2>
                        <Description text={message.description} />
                        <Expression {...expressionProps} />
                        <div className="set-answers-wrapper">
                            <button className="show-radio" onClick={this.showSetAnswers}>
                                Показать варианты ответов
                            </button>
                            {answersToSelect.map((a, i) => {
                                return (
                                    <div key={i} className={answersClass}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            id={`rad${i}`}
                                            onChange={(e) => this.onSelect(e, a)}
                                        />
                                        <label htmlFor={`rad${i}`}>{a}</label>
                                    </div>
                                    );
                            })}
                        </div>
                        <div className={solutionPopUpClass}>{solutionPopUpMessage}</div>
                        <form className="answer-input-wrapper">
                            <input
                                className="answer-input"
                                type="text"
                                ref={this.answerInput}
                                placeholder="Ваш ответ"
                                onKeyDown={this.onPressButton}
                            />
                            <input type="button" onClick={this.onClick} value={buttonValue} onKeyDown={this.onPressButton} />
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Task;
