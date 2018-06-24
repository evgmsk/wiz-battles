/**
 * project WizBattle
 */
import { Layer, Stage, Image } from 'react-konva';
import React from 'react';
import { Heroes } from '../../../Consts/constants';
import Hero from './hero';
import './selectHero.scss';

class HeroesHall extends React.Component {
    constructor(props) {
        super(props);
        this.stage = React.createRef();
        this.layer = React.createRef();
        this.container = React.createRef();
        this.firstHero = React.createRef();
        this.secondHero = React.createRef();
        this.thirdHero = React.createRef();
        const [width, height] = [window.innerWidth * 0.8, window.innerHeight * 0.6];
        const [initialWidth, initialHeight] = [...[width, height]];
        this.state = {
            firstHero: null,
            secondHero: null,
            thirdHero: null,
            stageProps: { width, height, initialWidth, initialHeight, scaleX: 1, scaleY: 1 },
        };
        // console.log(props);
       // this.onCLick = this.onCLick.bind(this);
    }
    componentDidMount() {
        this.mountHeroes();
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
       // window.removeEventListener('resize', this.canvasResize);
    }
    canvasResize(e) {
        e.cancelBubble = true;
        const container = this.container.current;
        const { initialWidth, initialHeight } = this.state.stageProps;
        const [width, height] = [container.offsetWidth, container.offsetHeight];
        const [scaleX, scaleY] = [width / initialWidth, height / initialHeight];
        const stageProps = { width, height, initialWidth, initialHeight, scaleX, scaleY };
        this.setState({ stageProps });
    }
    setInitialSize() {
        const container = this.container.current;
        const [width, height] = [container.offsetWidth, container.offsetHeight];
        const [initialWidth, initialHeight] = [...[width, height]];
        let { stageProps } = this.state;
        stageProps = { ...stageProps, width, height, initialWidth, initialHeight };
        this.setState({ stageProps });
    }
    loadImg(img, props) {
        const image = new window.Image();
        image.src = img;
        image.onload = () => ({ image, props });
    }
    mountHeroes() {
        const heroes = Object.values(Heroes).map(hero => {
            const { image, ...props } = hero;
            this.loadImg(image, props);
        });
        console.log(heroes)
        Promise.all(heroes).then(images => {
            const firstHero = { image: images[0].image, props: images[0].props };
            const secondHero = { image: images[1].image, props: images[1].props };
            const thirdHero = { image: images[2].image, props: images[2].props };
           this.setState({ firstHero, secondHero, thirdHero });
        });
    }
    render() {
        const { stageProps, firstHero, secondHero, thirdHero } = this.state;
        return (
            <div>
                <div className="heroes-wrapper">

                </div>
            </div>
            );
    }
}

export default HeroesHall;
