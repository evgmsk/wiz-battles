/**
 * project WizBattle
 */
const randomVx = dir => {
    if (dir)
        return ((Math.random() * 100) + 200) * (0.5 - Math.random());
    return (Math.random() * 100) + 300;
};

export default randomVx;
