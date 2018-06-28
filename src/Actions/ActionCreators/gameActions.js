/**
 * project WizBattle.
 */
import AT from '../actionTypes';

export const setSoundsVolume = soundsVolume => {
    return ({
        type: AT.SET_SOUNDS_VOLUME,
        soundsVolume,
    });
};

export const setMusicVolume = musicVolume => {
    return ({
        type: AT.SET_MUSIC_VOLUME,
        musicVolume,
    });
};

export const setPlayerMove = playerMove => {
    return ({
        type: AT.SET_PLAYER_MOVE,
        playerMove,
    });
};

export const resetGameHero = resetHero => {
    return {
        type: AT.RESET_HERO,
        resetHero,
    };
};

export const setPlayerLevel = level => {
    return {
        type: AT.SET_PLAYER_LEVEL,
        level,
    };
};

export const setPlayerExperience = experience => {
    return {
        type: AT.SET_PLAYER_EXPERIENCE,
        experience,
    };
};

export const setOpponentExperience = experience => {
    return {
        type: AT.SET_PLAYER_LEVEL,
        experience,
    };
};

export const setPlayerSpell = spell => {
    return ({
        type: AT.SET_PLAYER_SPELL,
        spell,
    });
};

export const setOpponentSpell = spell => {
    return ({
        type: AT.SET_OPPONENT_SPELL,
        spell,
    });
};

export const setDemo = demo => {
    return ({
        type: AT.SET_DEMO,
        demo,
    });
};

export const setBattle = battle => {
    return ({
        type: AT.SET_BATTLE,
        battle,
    });
};

export const setOpponent = opponent => {
    return {
        type: AT.SET_OPPONENT,
        opponent,
    };
};

export const setPlayer = player => {
    return {
        type: AT.SET_PLAYER,
        player,
    };
};

export const setOpponentHealth = health => {
    return {
        type: AT.SET_OPPONENT_HEALTH,
        health,
    };
};

export const setPlayerHealth = health => {
    return {
        type: AT.SET_PLAYER_HEALTH,
        health,
    };
};

export const setDifficulty = difficulty => {
    return {
        type: AT.SET_BATTLE_DIFFICULTY,
        difficulty,
    };
};

export const setPVP = pvp => {
    return {
        type: AT.SET_PVP,
        pvp,
    };
};

export const setScene = scene => {
    return {
        type: AT.SET_BATTLE_SCENE,
        scene,
    };
};

export const setPlayerName = name => {
    return {
        type: AT.SET_PLAYER_NAME,
        name,
    };
};

export const setOpponentName = name => {
    return {
        type: AT.SET_OPPONENT_NAME,
        name,
    };
};

export const setTimeLimit = timeLimit => {
    return {
        type: AT.SET_BATTLE_TIME_LIMIT,
        timeLimit,
    };
};

export const setTask = task => {
    return {
        type: AT.SET_TASK,
        task,
    };
};

export const toStartBattle = (startBattle) => {
    return {
        type: AT.START_BATTLE,
        startBattle,
    };
};
