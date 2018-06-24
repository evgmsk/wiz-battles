/**
 * project WizBattle
 */
import { Layer, Stage, Image } from 'react-konva';
import React from 'react';
import BGBattle from '../../images/scenes/battle_scene_0.jpg';
import GameBg from '../../images/game_map_0.jpg';
import {
    definePlayer,
    defineAIOpponent,
} from '../../GameFunctions/battleFunctions';
import BattleContainer from '../../Containers/battleContainer';
import HeroesHallContainer from '../../Containers/menuHeroesContainer';
import './game.scss';

class Game extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.stage = React.createRef();
        this.layer = React.createRef();
        this.container = React.createRef();
        this.hero = React.createRef();
        this.sh = React.createRef();
        const [width, height] = [window.innerWidth * 0.8, window.innerHeight * 0.6];
        const [initialWidth, initialHeight] = [...[width, height]];
        this.state = {
            stageProps: { width, height, initialWidth, initialHeight, scaleX: 1, scaleY: 1 },
            showStats: false,
        };
        // console.log(props);
        this.onCLick = this.onCLick.bind(this);
        this.setDemo = this.setDemo.bind(this);
        this.newBattle = this.newBattle.bind(this);
        this.showStats = this.showStats.bind(this);
        this.canvasGameResize = this.canvasGameResize.bind(this);
    }
    componentDidMount() {
        if (this.props.game.demo)
            this.startBattle();
        else {
            window.addEventListener('resize', this.canvasGameResize);
            this.setInitialSize();
            this.mountMap();
        }
    }
    componentDidUpdate(prevProps) {
        const { game } = this.props;
        if (game.startBattle && !prevProps.game.startBattle) {
            window.removeEventListener('resize', this.canvasGameResize);
            this.startBattle();
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.canvasGameResize);
    }
    canvasGameResize(e) {
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
    mountMap() {
        const image = new window.Image();
        image.src = GameBg;
        image.onload = () => {
            this.setState({ image });
            this.layer.current.moveToBottom();
        };
    }
    onCLick(e) {
        e.stopPropagation();
        e.preventDefault();
        window.location.hash = '#/home';
        this.props.goToGame({ startGame: false });
    }
    setDemo() {
        this.props.setDemo(!this.props.game.demo);
    }
    newBattle(e) {
        e.stopPropagation();
        e.preventDefault();
        this.startBattle();
    }
    showStats(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ showStats: true });
    }

    defineScene() {
        const scene = BGBattle;
        this.props.setScene(scene);
    }
    startBattle() {
        const { game, hero, gameData } = this.props;
        const player = definePlayer(hero);
        const opponent = game.battle.pvp
            ? game.battle.opponent
            : defineAIOpponent(hero, gameData.monsters);
        this.defineScene();
        this.props.setOpponent(opponent);
        this.props.setPlayer(player);
        this.props.toBattle(true);
    }
    defineComponentToRender() {
        const { stageProps, image } = this.state;
        const { game, hero } = this.props;
        if (game.startBattle) {
            return <BattleContainer />;
        }
        /*
        if (!hero.image) {
            return <HeroesHallContainer />;
        }
*/
        return (
            <div className="game-screen" >
                <Stage {...stageProps} ref={this.stage}>
                    <Layer ref={this.layer}>
                        <Image image={image} width={stageProps.width} height={stageProps.height} alt="" />
                    </Layer>
                </Stage>
                <div className="menu-back">
                    <button onClick={this.onCLick}>Back</button>
                    <button onClick={this.setDemo}>{game.demo ? 'Real' : 'Demo'}</button>
                    <button onClick={this.newBattle}>Новая битва</button>
                    <button onClick={this.showStats}>Статистика Героя</button>
                </div>
            </div>
        );
    }
    render() {
        // console.log(this.props)
        const Component = this.defineComponentToRender();
        return (
            <div className="game-wrapper" ref={this.container}>
                {Component}
            </div>
        );
    }
}

export default Game;
