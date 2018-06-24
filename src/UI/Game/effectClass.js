/**
 * project WizBattle.
 */
import React from 'react';
import { AnimationTypes, TweenTypes } from '../../Consts/constants';

class EffectClass extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            animation: null,
        };
        console.log(this.props);
    }
    componentDidMount() {
        this.createAnimations();
    }
    componentWillUnmount() {
        if (this.state.animation)
            this.state.animation.stop();
    }
    createAnimations() {
        const { layer, props } = this.props;
        const { tweenType, animationType } = props;
        if (animationType) {
            const animation = this.createAnimation(layer, animationType);
            this.setState({ animation });
            const timeOut = Math.round(Math.random() * 3000);
            setTimeout(() => {
                animation.start();
                this.ref.current.to({
                    opacity: 1,
                    duration: 1.5,
                }, 1);
            }, timeOut);
        }
        if (tweenType) {
            const tween = this.createTween(tweenType);
            const timeOut = Math.round(Math.random() * 3000);
            setTimeout(() => {
                if (typeof tween === 'function')
                    tween();
                else tween.play();
                this.ref.current.setAttr('opacity', 1);
            }, timeOut);
        }
    }
    createAnimation(layer, animationType) {
        return AnimationTypes[animationType](layer.current, this.ref.current);
    }
    createTween(tweenType) {
        if (tweenType)
            return TweenTypes[tweenType](this.ref.current);
        return null;
    }
    render() {
        const { props } = this.props;
        const Shape = this.props.type;
        //console.log(this.props, this.state);
        return <Shape ref={this.ref} {...props} />;
    }
}

EffectClass.defaultProps = {

};

export default EffectClass;
