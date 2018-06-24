/**
 * project WizBattle
 */
import Konva from 'konva';
import randomVel from '../HelperFunctions/randomVel';

export const rotation = (layer, shape, angularSpeed = 90) =>
    new Konva.Animation((frame) => {
        const angleDiff = (frame.timeDiff * angularSpeed) / 1000;
        shape.rotate(angleDiff);
    }, layer);

export const rotateSwing = (layer, shape, angularSpeed = 90, period = 1500) =>
    new Konva.Animation((frame) => {
        const angle = ((frame.timeDiff * angularSpeed) / 1000);
        const angleDiff = angle * Math.sin((frame.time * 2 * Math.PI) / period);
        shape.rotate(angleDiff);
    }, layer);

export const swingX = (layer, shape, amplitude = 0.5, period = 1500) =>
    new Konva.Animation((frame) => {
        const X = () => shape.attrs.x || 0;
        shape.setX((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + X());
    }, layer);

export const swingY = (layer, shape, amplitude = 0.5, period = 1500) =>
    new Konva.Animation((frame) => {
        const Y = shape.getAttr('y') || 0;
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
    }, layer);

export const swingYRotateS = (layer, shape, amplitude = 0.5, angularSpeed = 90, period = 1500) =>
    new Konva.Animation((frame) => {
        const angle = ((frame.timeDiff * angularSpeed) / 1000);
        const angleDiff = angle * Math.sin((frame.time * 2 * Math.PI) / period);
        const Y = (() => shape.attrs.y || 0)();
        shape.rotate(angleDiff);
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
    }, layer);

export const swingXRotateS = (layer, shape, amplitude = 0.5, angularSpeed = 90, period = 1500) =>
    new Konva.Animation((frame) => {
        const angle = ((frame.timeDiff * angularSpeed) / 1000);
        const angleDiff = angle * Math.sin((frame.time * 2 * Math.PI) / period);
        const X = (() => shape.attrs.x || 0)();
        shape.setX((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + X);
        shape.rotate(angleDiff);
    }, layer);

export const swingYRotateSR = (layer, shape, amplitude = 0.5, angularSpeed = 90, period = 1500) =>
    new Konva.Animation((frame) => {
        const angle = ((frame.timeDiff * angularSpeed) / 1000);
        const angleDiff = -angle * Math.sin((frame.time * 2 * Math.PI) / period);
        const Y = (() => shape.attrs.y || 0)();
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
        shape.rotate(angleDiff);
    }, layer);

export const swingXSwingY = (layer, shape, amplitude = 0.5, period = 1500) =>
    new Konva.Animation((frame) => {
        const Y = (() => shape.attrs.y || 0)();
        shape.setY((amplitude * Math.cos((frame.time * 2 * Math.PI) / period)) + Y);
        const X = (() => shape.attrs.x || 0)();
        shape.setX((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + X);
    }, layer);

export const stepsG = (layer, shape, amplitude = 0.5, period = 2000) =>
    new Konva.Animation((frame) => {
        const Y = (() => shape.attrs.y || 0)();
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
        shape.skewX((amplitude / 40) * Math.sin((frame.time * 2 * -Math.PI) / period));
    }, layer);

export const scaleX = (layer, shape, period = 2000) =>
    new Konva.Animation((frame) => {
        shape.scaleX(Math.sin((frame.time * 2 * -Math.PI) / period) + 0.00007);
    }, layer);

export const scaleXscaleY = (layer, shape, v = randomVel(0), am = 1.1, period = 2000) =>
    new Konva.Animation((frame) => {
        shape.scaleX((am * Math.sin((frame.time * v * 0.01 * Math.PI) / period)) + 0.5);
        shape.scaleY((am * Math.sin((frame.time * v * 0.01 * -Math.PI) / period)) + 0.5);
    }, layer);

export const scaleY = (layer, shape, amplitude = 0.5, period = 1500) =>
    new Konva.Animation((frame) => {
        const Y = (() => shape.attrs.y || 0)();
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
    }, layer);

export const mouth = (layer, shape, amplitude = 0.1, period = 1500) =>
    new Konva.Animation((frame) => {
        const Y = (() => shape.attrs.y || 0)();
        shape.setY((amplitude * 5 * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
        shape.scaleY((amplitude * Math.sin((frame.time * 2 * -Math.PI) / period)) + 1);
    }, layer);

export const swingYScaleY = (layer, shape, amplitude = 0.5, period = 1500) =>
    new Konva.Animation((frame) => {
        const Y = shape.getAttr('y') || 0;
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
        shape.scaleY(Math.sin((frame.time * Math.PI) / period) + 0.00007);
    }, layer);

export const stepF = (layer, shape, amplitude = 0.5, period = 2000) =>
    new Konva.Animation((frame) => {
        const Y = (() => shape.attrs.y || 0)();
        shape.setY((amplitude * Math.sin((frame.time * 2 * Math.PI) / period)) + Y);
        shape.skewX((amplitude / 4) * Math.sin((frame.time * 2 * -Math.PI) / period));
    }, layer);
