import { descriptions } from './data.js';
import { getRandomInt, getRandomItem, createComment } from './util.js';

export const generatePhotos = () => {
  const photos = [];
  let commentIdCounter = 1;

  for (let i = 1; i <= 25; i++) {
    const commentsCount = getRandomInt(0, 30);
    const comments = [];

    for (let j = 0; j < commentsCount; j++) {
      comments.push(createComment(commentIdCounter));
      commentIdCounter++;
    }

    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomItem(descriptions),
      likes: getRandomInt(15, 200),
      comments: comments
    };

    photos.push(photo);
  }

  return photos;
};
