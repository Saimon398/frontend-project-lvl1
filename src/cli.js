import readlineSync from 'readline-sync';

// Модуль

const introduceUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default introduceUser;
