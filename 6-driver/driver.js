const hasLicense = true;
const age = 18;
const isDrunk = false;

console.log(`Может ли пользователь сесть за руль: ${hasLicense && age >= 18 && !isDrunk ? 'может' : 'не может'}`);