/**
 * project WizBattle
 */
import React from 'react';
// import Konva from 'konva';
import { AnimationTypes, TweenTypes } from '../../Consts/constants';

class ShapeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: null,
            tween: null,
            animationType: props.props.animationType,
            tweenType: props.props.tweenType,
            angle: props.props.rotation,
            layerUp: props.props.layerUp,
        };
        this.ref = React.createRef();
        console.log(this.props)
        // this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    componentDidMount() {
        this.createAnimations();
    }
    componentDidUpdate() {
        // console.log(this.props, this.state);
        const { animationType, tweenType, layerUp } = this.props.props;
        if (layerUp > this.state.layerUp)
            this.ref.current.moveUp();
        if (layerUp < this.state.layerUp)
            this.ref.current.moveDown();
        if (animationType !== this.state.animationType
            || tweenType !== this.state.tweenType)
            this.createAnimations();
        const { animation, tween } = this.state;
        // console.log(animation && this.props.animate);
        if (animation && this.props.animate) {
            this.state.animation.start();
        } else if (animation && !this.props.animate)
            this.state.animation.stop();
        if (tween)
            this.state.tween();
    }
    componentWillUnmount() {
        if (this.state.animation)
            this.state.animation.stop();
    }

    createTween(tweenType) {
        if (tweenType)
            return TweenTypes[tweenType](this.ref.current);
        return null;
    }
    createAnimations() {
        const { layer, props } = this.props;
        const { tweenType, animationType } = props;
        let animation = null;
        let tween = null;
        if (animationType)
            animation = this.createAnimation(layer, animationType);
        if (tweenType)
            tween = this.createTween(tweenType);
        this.setState({ animation, animationType, tween, tweenType });
    }
    createAnimation(layer, animationType) {
        return AnimationTypes[animationType](layer.current, this.ref.current);
    }
    render() {
        const { props } = this.props;
        const Shape = this.props.type;
        console.log(this.props, this.state);
        return <Shape ref={this.ref} {...props} />;
    }
}

ShapeClass.defaultProps = {
    props: {
        animate: false,
        type: 'Shape',
    },
};

export default ShapeClass;
