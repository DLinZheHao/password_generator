import { sample } from './sample';
export const generatePassword = (condition) => {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '1234567890';
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // create a collection to store things user picked up
  let collection = [];

  if (condition.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''));
  }

  if (condition.upperCaseLetters === 'on') {
    collection = collection.concat(upperCaseLetters.split(''));
  }

  if (condition.number === 'on') {
    collection = collection.concat(numbers.split(''));
  }

  if (condition.symbols === 'on') {
    collection = collection.concat(symbols.split(''));
  }

  // remove things user do not need
  if (condition.excludeCharacters) {
    collection = collection.filter((el) => {
      return !condition.excludeCharacters.includes(el);
    });
  }

  // start generating password
  let password = '';
  for (let i = 0; i < condition.length; i++) {
    password += sample(collection);
  }
  // return the generated password
  return password;
};
