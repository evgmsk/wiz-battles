/**
 * project smartWizBattle
 */

export const EmailValidation = (email) => /^\w+@\w+\.\w{2,3}$/.test(email);

export const PasswordValidation = (password) =>
    /\w+(?=[!&^%$#*]+)/g.test(password) && (password.length >= 6);
