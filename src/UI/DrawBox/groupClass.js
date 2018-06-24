/**
 * project WizBattle
 */
import React from 'react';
import { Group } from 'react-konva';
import Konva from 'konva';
import ShapeClass from './shapeClass';

class GroupClass extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    onMouseEnter(e) {
        e.cancelBubble = true;
        if (this.props.drawing)
            return;
        this.props.stage.current._stage.content.style.cursor = 'pointer';
    }

    moving(x, y) {
        const [X, Y] = [this.ref.current.children[0].attrs.x, this.ref.current.children[0].attrs.y];
        //if (this.props.tween)
        this.ref.current.to({
            x: (X - x),
            y: (Y - y),
            easing: Konva.Easings.EaseInOut,
            duration: 4.7,
        });
    }
    onMouseLeave(e) {
        e.cancelBubble = true;
        if (!this.props.drawing)
            this.props.stage.current._stage.content.style.cursor = 'default';
    }

    render() {
        const { layer, stage, animated } = this.props;
        const Shapes = this.props.image;
        return (
            <Group
                ref={this.ref}
                draggable={this.props.draggable}
                onMouseLeave={this.onMouseLeave}
                onMouseEnter={this.onMouseEnter}
            >
            {Shapes.map((Shape, i) => {
                const Props = { type: Shape.shapeType, props: Shape.props, layer, stage, animated };
                return <ShapeClass {...Props} key={i} />;
            })}
            </Group>
        );
    }
}

export default GroupClass;
