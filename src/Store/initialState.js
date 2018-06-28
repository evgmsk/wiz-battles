/**
 * project smartWizBattle
 */
const initialState = {
    hero: {
        image: null,
        subjectLevel: {
            mathLevel: 1,
            languageLevel: 1,
        },
        nickName: '',
        items: [],
        itemsWearing: [],
        spells: [],
        monstersDefeated: 0,
        tasksResolved: 0,
        tasksFailed: [],
        battlesWin: 0,
        level: 1,
        experience: 0,
        achievements: {},
        location: {},
    },
    gameData: {
        monsters: [],
        heroes: [],
        locations: [],
    },
    game: {
        musicVolume: 0.1,
        soundsVolume: 1,
        resetHero: true,
        currentLocation: {},
        startBattle: false,
        battle: {
            pvp: false,
            difficulty: 'easy',
            subject: 'random',
            timeLimit: false,
            playerMove: true,
            player: {
                name: '',
                health: 100,
                spell: null,
                level: 1,
                image: {},
                baseDamage: 30,
                experience: 0,
            },
            opponent: {
                name: '',
                health: 100,
                level: 1,
                spell: null,
                image: {},
                baseDamage: 30,
                experience: 0,
            },
            scene: {},
            task: null,
            solution: null,
        },
    },
    app: {
        userVerified: false,
        startGame: false,
        loginForm: {
            showForm: true,
            emailValid: true,
            passwordValid: true,
        },
    },
    savedShapes: [],
};

export default initialState;
