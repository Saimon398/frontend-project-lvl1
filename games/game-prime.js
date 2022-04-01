// Правила и генератор раунда

/**
 * Функция генерирует случайное число от 1 до 100
 * @returns {number} Случайное число
 */
export const generateRandomNum = () => Math.ceil(Math.random() * 100);

/**
 * Функция проверяет является ли число простым
 * @returns Массив вида [результат, число]
 */
export const isPrime = () => {
  const number = generateRandomNum();
  let result;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      return [result, number];
    }
  }
  result = 'yes';
  return [result, number];
};

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
