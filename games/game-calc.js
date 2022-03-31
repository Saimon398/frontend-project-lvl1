// Правила и генератор раунда

/**
 * Функция генерирует случайное число от 1 до 100
 * @returns {number} Случайное число
 */
export const generateRandomNum = () => Math.ceil(Math.random() * 100);

/**
 * Функция, которая генерирует номер для операции
 * @returns {number} - Номер, который объявляет математическую операцию
 */
export const chooseOperation = () => Math.trunc(Math.random() * 1.5);

/**
 * Функция проводит математическую операцию
 * @returns {object} Массив вида [результат, выражение]
 */
export const calcOperation = () => {
  const first = generateRandomNum();
  const second = generateRandomNum();
  let expression; let
    result;
  if (chooseOperation() < 0.5) {
    expression = `${first} + ${second}`;
    result = first + second;
    return [String(result), expression];
  } if (chooseOperation() > 0.5 && chooseOperation() < 1) {
    expression = `${first} - ${second}`;
    result = first - second;
    return [String(result), expression];
  }
  expression = `${first} * ${second}`;
  result = first * second;
  return [String(result), expression];
};

export const condition = 'What is the result of the expression?';
