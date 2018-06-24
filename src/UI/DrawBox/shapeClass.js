/**
 * project WizBattle
 */
import React from 'react';
import Konva from 'konva';
import { AnimationTypes } from '../../Controllers/constants';
// import { averange, oddIndexes, evenIndexes } from '../../Controllers/helper-functions/averange';

class ShapeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: null,
        };
        this.ref = React.createRef();
        console.log(props);
        // this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    componentDidMount() {
        if (this.props.props.animationType)
            this.createAnimation();
    }

    componentDidUpdate() {
        const { animate } = this.props;
        const { animation } = this.state;
        if (animation && animate) {
            this.state.animation.start();
        } else if (animation)
            this.state.animation.stop();
    }

    componentWillUnmount() {
        if (this.state.animation)
            this.state.animation.stop();
    }

    createAnimation() {
        const { layer, props } = this.props;
        const { animationType } = props;
        if (animationType === 'fall') {
            const tween = AnimationTypes[animationType](this.ref.current);
            setTimeout(() => { tween.play(); }, 500);
            setTimeout(() => { this.ref.current.destroy(); }, 1500);
        } else {
            const animation = AnimationTypes[animationType](layer.current, this.ref.current);
            if (animation.start)
                this.setState({ animation });
        }
    }
    /*
    onMouseEnter(e) {
        e.cancelBubble = true;
        // const shape = this.ref.current;
        if (!this.props.drawing) {
            return

            const [x, y] = [shape.attrs.x + 150, shape.attrs.y + 150];
            const rotation = (shape.attrs.rotation || 0) + (Math.PI * 10);
            // console.log(x, y, shape.attrs.x, shape.attrs.y);
            shape.to({
                x,
                y,
                rotation,
                easing: Konva.Easings.EaseInOut,
                duration: 0.4,
            });
            setTimeout(() => {
                shape.to({
                    x: x - 250,
                    y: y - 250,
                    rotation: 0,
                    easing: Konva.Easings.EaseInOut,
                    duration: 0.4,
                });
                }, 700);

        } else
            this.props.stage.current._stage.content.style.cursor = 'pointer';
    }
*/
    moving(x, y) {
        this.ref.current.to({
            x,
            y,
            easing: Konva.Easings.EaseInOut,
            duration: 1.7,
        });
    }

    render() {
        const { props } = this.props;
        const Shape = this.props.type;
        // console.log(props, Shape, this.props.type)
        return (
            <Shape
                ref={this.ref}
                {...props}
            />
            );
    }
}

ShapeClass.defaultProps = {
    props: {
        animate: false,
        type: 'Shape',
    },
};

export default ShapeClass;
