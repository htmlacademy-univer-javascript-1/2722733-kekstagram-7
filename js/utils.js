import { names, messages } from './data.js';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomItem = (array) => array[getRandomInt(0, array.length - 1)];

export const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: getRandomItem(messages),
  name: getRandomItem(names)
});
