// Правила и генератор раунда

/**
 * Функция генерирует случайное число от 1 до 100
 * @returns {number} Случайное число
 */
export const generateRandomNum = () => Math.ceil(Math.random() * 100);

/**
 * Функция находит делители числа
 * @param {number} number Номер, делители которого нужно найти
 * @returns {object} Массив делителей
 */
export const findDivisor = (number) => {
  const result = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      result.push(i);
    }
  }
  return result;
};

/**
 * Функция находит максимальный общий делитель случайных чисел
 * @returns Массив вида [Макс.делитель, числа]
 */
export const findGreatestDivisor = () => {
  const first = generateRandomNum();
  const second = generateRandomNum();
  const result = [];
  for (const div of findDivisor(first)) {
    if (findDivisor(second).includes(div)) {
      result.push(div);
    }
  }
  return [String(result[result.length - 1]), `${first} ${second}`];
};

export const condition = 'Find the greatest common divisor of given numbers.';
