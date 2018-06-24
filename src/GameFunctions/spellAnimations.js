/**
 * project WizBattle.
 */
import Konva from 'konva';
import randomVel from '../HelperFunctions/randomVel';

export const iceStorm = (layer, shape, pl, onEnd, angSpeed = 120, period = 1000, vx = 600) => {
    return (
        new Konva.Animation((frame) => {
            const angleDiff = (frame.timeDiff * angSpeed) / period;
            shape.rotate(angleDiff);
            const X = pl ? shape.getAttr('x') + ((frame.timeDiff * vx) / period)
                : shape.getAttr('x') - ((frame.timeDiff * vx) / period);
            const vy = 200 - (Math.random() * 60);
            const Y = shape.getAttr('y') + ((frame.timeDiff * vy) / period);
            if (Y >= window.innerHeight - 100
                || X >= window.innerWidth - 100
                || X <= 100) {
                shape.destroy();
                onEnd();
            } else {
                shape.setX(X);
                shape.setY(Y);
            }
        }, layer)
    );
};

export const flameStrike = (layer, shape, pl = 1, onEnd, am = 5, period = 1000, vx = 200) => {
    return (
        new Konva.Animation((frame) => {
            const X = pl ? shape.getAttr('x') + ((frame.timeDiff * vx) / period)
                : shape.getAttr('x') - ((frame.timeDiff * vx) / period);
            const fnArr = [Math.cos, Math.sin];
            const fn = fnArr[Math.floor(Math.random() * 2)];
            shape.skewX((am * 0.3 * fn((frame.time * 2 * Math.PI) / period)));
            shape.skewY((am * fn((frame.time * 2 * Math.PI) / period)));
            if (shape.getAttr('x') > window.innerWidth * 0.85
                || shape.getAttr('x') < window.innerWidth * 0.2) {
                shape.destroy();
                onEnd();
            } else
                shape.setX(X);
        }, layer)
    );
};

export const lifeAttack = (layer, shape, pl, onEnd, vx = randomVel(1), vy = -250, per = 1000) => {
    return (
        new Konva.Animation((frame) => {
            if (shape.getAttr('y') <= 100 || shape.getAttr('x') >= window.innerWidth - 50) {
                shape.destroy();
                onEnd();
            } else {
                shape.setY(shape.getAttr('y') + ((frame.timeDiff * vy) / per));
                shape.setX(shape.getAttr('x') + ((frame.timeDiff * vx) / per));
                shape.skewY(Math.sin((frame.time * 2 * Math.PI) / per));
            }
        }, layer)
    );
};

export const waterAttack = (layer, shape, pl, onEnd, vx = 30, vy = 300, period = 1000) => {
    return (
        new Konva.Animation((frame) => {
            let a = 10;
            const Y = (Math.random() * 100) + 100;
            const X = pl ? shape.getAttr('x') + ((frame.timeDiff * vx) / period)
                : shape.getAttr('x') - ((frame.timeDiff * vx) / period);
            vy += ((frame.timeDiff * a) / period);
            shape.setX(X);
            shape.setY(shape.getAttr('y') + ((frame.timeDiff * vy) / period));
            if (shape.getAttr('y') > (window.innerHeight / 2) + Y) {
                shape.scaleX(shape.getAttr('scaleX') + ((frame.time * 1) / period));
                vx = 0;
                vy = 0;
                a = 0;
            }
            if (shape.getAttr('scaleX') > 5) {
                shape.destroy();
                onEnd();
            }
        }, layer)
    );
};

export const Salute = (layer, shape, onEnd, vx = randomVel(1), vy = -300, ay = 150, p = 1000) => {
    return (
        new Konva.Animation((frame) => {
            if (shape.getAttr('scaleX') > 5
                || shape.getAttr('y') < 100
                || shape.getAttr('y') > window.innerHeight - 100) {
                shape.destroy();
                onEnd();
            } else {
                shape.scaleX(shape.getAttr('scaleX') + ((frame.timeDiff * 1) / p));
                const X = shape.getAttr('x') + ((frame.timeDiff * vx) / p);
                vy += ((frame.timeDiff * ay) / p);
                const Y = shape.getAttr('y') + ((frame.timeDiff * vy) / p);
                shape.setX(X);
                shape.setY(Y);
            }
        }, layer)
    );
};
