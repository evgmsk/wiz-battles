/**
 * project WizBattle.
 */
import KateImage from '../images/heroes/kate.png';
import AntonImage from '../images/heroes/anton.png';
import VasyaImage from '../images/heroes/vasya.png';

export const Katya = {
    shapeType: 'Sprite',
    image: KateImage,
    name: 'Катя',
    animations: {
        idle: [
            0, 0, 300, 300,
            300, 0, 300, 300,
            600, 0, 300, 300,
            900, 0, 300, 300,
            1200, 0, 300, 300,
            1500, 0, 300, 300,
            1800, 0, 300, 300,
            2100, 0, 300, 300,
            2400, 0, 300, 300,
            2700, 0, 300, 300,
        ],
        attack: [
            0, 600, 300, 300,
            290, 600, 300, 300,
            575, 600, 300, 300,
            865, 600, 300, 300,
            1195, 600, 300, 300,
            1495, 600, 300, 300,
            1800, 600, 300, 300,
        ],
    },
    animation: 'idle',
    x: window.innerWidth / 7,
    y: window.innerHeight / 2,
    scale: { x: 0.7, y: 0.7 },
    frameRate: 4,
    frameIndex: 0,
};
export const Anton = {
    shapeType: 'Sprite',
    image: AntonImage,
    name: 'Антон',
    animations: {
        idle: [
            0, 0, 300, 300,
            300, 0, 300, 300,
            600, 0, 300, 300,
            900, 0, 300, 300,
            1200, 0, 300, 300,
            1500, 0, 300, 300,
            1800, 0, 300, 300,
            2100, 0, 300, 300,
            2400, 0, 300, 300,
            2700, 0, 300, 300,
        ],
        attack: [
            0, 600, 300, 300,
            300, 600, 300, 300,
            600, 600, 300, 300,
            900, 600, 300, 300,
            1200, 600, 300, 300,
            1500, 600, 300, 300,
        ],
    },
    animation: 'idle',
    x: window.innerWidth / 7,
    y: window.innerHeight / 2,
    scale: { x: 0.7, y: 0.7 },
    frameRate: 4,
    frameIndex: 0,
};
export const Vasya = {
    shapeType: 'Sprite',
    name: 'Василий',
    image: VasyaImage,
    animations: {
        idle: [
            0, 0, 300, 300,
            300, 0, 300, 300,
            600, 0, 300, 300,
            900, 0, 300, 300,
            1200, 0, 300, 300,
            1500, 0, 300, 300,
            1800, 0, 300, 300,
            2100, 0, 300, 300,
            2400, 0, 300, 300,
            2700, 0, 300, 300,
        ],
        attack: [
            0, 600, 300, 300,
            300, 600, 300, 300,
            600, 600, 300, 300,
            900, 600, 300, 300,
            1200, 600, 300, 300,
            1500, 600, 300, 300,
        ],
    },
    animation: 'idle',
    x: window.innerWidth / 7,
    y: window.innerHeight / 2,
    scale: { x: 0.7, y: 0.7 },
    frameRate: 4,
    frameIndex: 0,
};
