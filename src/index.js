// Основная логика для всего игрового процесса
import readlineSync from 'readline-sync';

let counter = 0; // Переменная-счетчик

/**
 * Эта функция принимает имя пользователя
 * @returns {string} Имя пользователя
 */
export const introduceUser = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

/**
 * Функция осуществляет общую логику brain-игр
 * @param {object} brainGame Правила brain-игр
 * @param {string} condition Условие brain-игры
 * @returns Завершение при неправльном ответе
 */
export const startGame = (brainGame, condition) => {
  const userName = introduceUser(); // Вызывается приветствие и результат присваивается в userName
  console.log(condition); // Условие будет разным для всех задач
  while (counter < 3) {
    const [correctAnswer, question] = brainGame(); // Происходит вызов-функции
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
