// Правила и генератор раунда

/**
 * Функция генерирует случайное число от 1 до 100
 * @returns {number} Случайное число
 */
export const generateRandomNum = () => Math.ceil(Math.random() * 100);

/**
 * Функция проверяет число на четность
 * @returns {object} Массив вида [четность, число]
 */
export const isEven = () => {
  const number = generateRandomNum();
  const result = (number % 2 === 0) ? 'yes' : 'no';
  return [result, number];
};

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
