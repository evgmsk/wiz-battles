/**
 * project WizBattle
 */
export const levelsGap = level => Math.round(1.2 ** level) * 100;

export const calcCurrentExperience = (damage, experience, level) => {
    const gap = levelsGap(level);
    const totalExperience = damage + experience;
    const newExperience = totalExperience % gap;
    return { levelUp: (totalExperience >= gap), newExperience, damage };
};
export const calcBaseHealth = level => {
    return 90 + (parseInt(level, 10) * 10);
};

export const calcBaseDamage = (level, items = []) => {
    const bonusDamage = items.filter(i => i.bonusDamage)
        .reduce((acc, i) => acc += i.bonusDamage, 0);
    return 30 + (level * 2) + bonusDamage;
};

export const calcRandomOpponentLevel = userLevel => {
    if (userLevel > 2)
        return Math.floor(Math.random() * 4) + (userLevel - 2);
    return Math.floor(Math.random() * 2) + userLevel;
};

export const calcPlayerHealth = (level, items = []) => {
    const healthBonus = items.filter(i => i.healthBonus)
        .reduce((acc, i) => acc += i.healthBonus, 0);
    return calcBaseHealth(level) + healthBonus;
};

export const definePlayer = user => {
    const health = calcPlayerHealth(user.level, user.items);
    const effect = null;
    const image = user.image;
    const level = user.level;
    const baseDamage = calcBaseDamage(user.level);
    const experience = user.experience;
    return { health, effect, image, level, baseDamage, experience };
};

export const setOpponentImage = () => {

};

export const defineAIOpponent = (user, images) => {
    const health = calcPlayerHealth(user.level, []);
    const effect = null;
    const image = setOpponentImage(images);
    const level = calcRandomOpponentLevel(user.level);
    const baseDamage = calcBaseDamage(user.level);
    return { health, effect, image, level, baseDamage };
};

export const resolvePlayerAttack = (solution, player, opponent) => {
    const { experience, level, baseDamage } = player;
    const damage = Math.round(baseDamage * solution);
    const actualDamage = Math.min(damage, opponent.health);
    // console.log(damage, solution, actualDamage)
    const { levelUp, newExperience } = calcCurrentExperience(actualDamage, experience, level);
    return { levelUp, level: newExperience, damage };
};
