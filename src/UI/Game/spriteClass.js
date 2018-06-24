/**
 * project WizBattle.
 */
import React from 'react';
import { Sprite } from 'react-konva';
import Girl from '../../images/heroes/anna.png';
import { Kate } from '../../Consts/constants';

class SpriteClass extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            image: null,
        };
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = Kate.image || this.props.image;
        image.onload = () => {
            this.setState({ image });
            this.ref.current.start();
        };
    }
    componentDidUpdate() {

    }

    render() {
        const { spriteProps } = Kate || this.props;
        spriteProps.x = window.innerWidth / 6;
        spriteProps.y = window.innerHeight / 2;
        const { image } = this.state;
        return (
            <Sprite ref={this.ref} {...spriteProps} image={image} />
        );
    }
}

SpriteClass.defaultProps = {
    image: Girl,
    spriteProps: {
        animations: {
            idle: [
                50, 0, 330, 400,
                366, 0, 330, 400,
                685, 0, 330, 400,
                999, 0, 330, 400,
            ],
        },
        animation: 'idle',
        x: 200,
        y: 400,
        scale: { x: 0.3, y: 0.3 },
        frameRate: 2,
        frameIndex: 0,
    },
};
export default SpriteClass;
