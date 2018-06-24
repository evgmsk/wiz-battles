/**
 * project WizBattle
 */
import React from 'react';
import Speaker from 'react-icons/lib/ti/volume';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        const { text } = this.props;
        const message = text.split('.')[0];
        this.onSound(message);
    }
    onSound(text, rate = 1, volume = 1) {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        const voice = voices.filter(x => x.lang === 'ru-RU')[0];
        const speak = () => {
            if (text !== '') {
                const utterThis = new SpeechSynthesisUtterance(text);
                utterThis.voice = voices[voice];
                utterThis.rate = rate;
                utterThis.pitch = 1;
                utterThis.volume = volume;
                synth.speak(utterThis);
            }
        };
        speak();
    }
    onClick(e) {
        e.stopPropagation();
        const { text } = this.props;
        this.onSound(text);
    }

    render() {
        const { text } = this.props;
        return (
            <div className="task-description-wrapper">
                <div className="task-description">
                    <p>{text.split('.')[0]}</p>
                    <button
                        className="sound-description"
                        onClick={this.onClick}
                    >
                        <Speaker />
                    </button>
                </div>
            </div>
        );
    }
}

export default Description;
