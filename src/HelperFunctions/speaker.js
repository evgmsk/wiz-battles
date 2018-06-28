/**
 * project WizBattle
 */
const onSound = (text, lang = 'ru-RU', rate = 1, volume = 1) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const voice = voices.filter(x => x.lang === lang)[0];
    // console.log(text, voice);
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
};

export default onSound;
