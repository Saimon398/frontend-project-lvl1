// Правила и генератор раундов

/**
 * Функция генерирует случайное число от 1 до 100
 * @returns {number} Случайное число
 */
export const generateRandomNum = (limit) => Math.ceil(Math.random() * limit);

export const generateProgression = () => {
  let progression = [];
  const start = generateRandomNum(3);
  const step = generateRandomNum(2);
  for (let i = start; i <= 12; i += step) {
    progression.push(i);
  }
  const missingIndex = generateRandomNum(progression.length - 1);
  const result = progression[missingIndex];
  progression[missingIndex] = '..';
  progression = progression.join(' ');
  return [String(result), progression];
};

export const condition = 'What number is missing in the progression?';
