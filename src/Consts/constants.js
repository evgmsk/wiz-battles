/**
 * project smartWizBattle
 */
import {
    swingX,
    rotation,
    swingY,
    rotateSwing,
    swingYRotateS,
    swingYRotateSR,
    swingXRotateS,
    swingXSwingY,
    stepsG,
    scaleX,
    scaleY,
    stepF,
    mouth,
    swingYScaleY,
    scaleXscaleY,
} from '../HelperFunctions/drawBoxAnimations';
import { iceStorm, flameStrike, lifeAttack, waterAttack, Salute } from '../GameFunctions/spellAnimations';
import { fall, moveX, skewXY } from '../GameFunctions/tweens';
import { englishTranslateGenerator } from '../GameFunctions/TaskGenerators/langaugeTaskGenerator';
import expressionTaskGenerator from '../GameFunctions/TaskGenerators/mathExpressionTaskGenerator';
import fractionTaskGenerator from '../GameFunctions/TaskGenerators/mathFractionTaskGenerator';
import { Katya, Anton, Vasya } from './heroes';
import { leafRising, snowStorm, fire, waterFall, salute } from '../GameFunctions/effects';

export const MainRoutes = {
    HOME: {
        path: '/',
        title: 'WB',
    },
    ABOUT: {
        path: '/about',
        title: 'Об игре',
    },
    DRAWBOX: {
        path: '/draw',
        title: 'Рисовать',
    },
    LOGIN: {
        path: '/login',
        title: 'Войти',
    },
    GAME: {
        path: '/game',
        title: 'Играть',
    },
};

export const Heroes = {
    Anton,
    Katya,
    Vasya,
};

export const ShapeTypes = [
    'Line-simple',
    'Line-polygon',
    'Line-blob',
    'Rect',
    'Ellipse',
    'Star',
    'Ring',
    'Arc',
    'RegularPolygon',
];

export const Shapes = {
    Line: 'Line',
    Rect: 'Rect',
    Ellipse: 'Ellipse',
    Star: 'Star',
    Ring: 'Ring',
    Arc: 'Arc',
    RegularPolygon: 'RegularPolygon',
};

export const TaskGenerators = {
    englishTranslateGenerator,
    expressionTaskGenerator,
    fractionTaskGenerator,
};

export const AnimationTypes = {
    '': null,
    swingX,
    swingY,
    rotation,
    rotateSwing,
    swingYRotateS,
    swingYRotateSR,
    swingXRotateS,
    swingXSwingY,
    stepsG,
    scaleX,
    scaleY,
    stepF,
    swingYScaleY,
    mouth,
    scaleXscaleY,
};

export const SpellAnimations = {
    iceStorm,
    waterAttack,
    flameStrike,
    lifeAttack,
    Salute,
};

export const TweenTypes = { '': null, fall, moveX, skewXY };

export const Spells = { ice: 'льда', fire: 'огня', water: 'воды', life: 'жизни' };

export const Salutation = { effect: salute, animation: Salute };

export const MonstersNames = { headY1: 'ПервыйУлетный', iceMonster: 'ЛупоглазыйМороз' };

export const Effects = {
    ice: { effect: snowStorm, animation: 'iceStorm' },
    fire: { effect: fire, animation: 'flameStrike' },
    water: { effect: waterFall, animation: 'waterAttack' },
    life: { effect: leafRising, animation: 'lifeAttack' },
};

export const IceColors = ['#eaf9fe', '#eff9fe', '#eaf9ff', '#eaf9f9', '#e8f9fe', '#eaf9fe', '#eaf3fe'];

export const Langs = { ru: 'ru-RU', en: 'en-US' };
