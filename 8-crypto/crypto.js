const password = 'somepassword';

const encrypt = (string) => {
  const array = string.split('').reverse();
  const firstPart = array.slice(0, array.length / 2);
  const secondPart = array.slice(array.length / 2);

  return secondPart.concat(firstPart).join('');
};

const checkPassword = (encrypted, original) => {
  if (encrypt(encrypted) !== original) {
    return false;
  }

  return true;
};

console.log(encrypt(password));
console.log(checkPassword(encrypt(password), password));