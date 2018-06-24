/**
 * project WizBattle
 */
import { Layer, Stage } from 'react-konva';
import React from 'react';
import { Heroes } from '../../../Consts/constants';
import SpriteClass from '../ShapeClasses/spriteClass';
import './selectHero.scss';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.stage = React.createRef();
        this.layer = React.createRef();
        this.container = React.createRef();
        this.hero = React.createRef();
        const [width, height] = [window.innerWidth * 0.2, window.innerHeight * 0.2];
        const [initialWidth, initialHeight] = [...[width, height]];
        this.state = {
            stageProps: { width, height, initialWidth, initialHeight, scaleX: 1, scaleY: 1 },
        };
        console.log(props);
        this.onCLick = this.onCLick.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.canvasResize);
        this.setInitialSize();
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.canvasResize);
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
    loadImg(img, name) {
        const image = new window.Image();
        image.src = img;
        image.onload = () => ({ image, name });
    }
    mountHeroes() {
        const heroes = Object.values(Heroes).map(h => this.loadImg(h.image));
        Promise.all(heroes).then(images => {
            const firstHero = { image: images[0].image, name: images[0].name };
            const secondHero = images[1];
            const thirdHero = images[2];
            this.setState({ firstHero, secondHero, thirdHero });
        });
    }
    render() {
        const { stageProps } = this.state;
        const { image, ...props } = this.props.hero;
        return (
            <div className="hero-image" >
                <Stage {...stageProps}>
                    <Layer>
                        <SpriteClass image={image} {...props} />
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Hero;
