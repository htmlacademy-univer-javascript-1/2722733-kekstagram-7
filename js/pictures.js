const PICTURES_COUNT = 25;

const SCALE_MIN = 0.2;
const SCALE_MAX = 1;
const ANGLE_MIN = -35;
const ANGLE_MAX = 35;

const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 240;

const URL_PHOTO_BASE = 'https://26.objects.htmlacademy.pro/static/';
const URL_AVATAR_BASE = 'https://26.objects.htmlacademy.pro/static/avatar/';

const DESCRIPTIONS = [
  'Солнце садится над морем',
  'Горная тропа утром',
  'Верный друг и лучшие кадры',
  'Кофе и круассан',
  'Ночной город',
  'Прогулка в лесу',
  'Яркие краски заката',
  'Старые улочки города',
  'Пикник на берегу',
  'Первый снег',
];

const NAMES = [
  'Мария', 'Дмитрий', 'Алексей', 'Анна', 'Сергей',
  'Ольга', 'Иван', 'Наталья', 'Пётр', 'Екатерина',
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (items) => items[getRandomInt(0, items.length - 1)];

const getRandomText = () => {
  const words = ['Круто!', 'Отличный кадр', 'Супер', 'Нравится', 'Прекрасно', 'Вау'];
  const length = getRandomInt(1, 5);
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(getRandomArrayElement(words));
  }
  return result.join(' ');
};

const createComments = () => {
  const count = getRandomInt(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      id: getRandomInt(1, 100000),
      name: getRandomArrayElement(NAMES),
      text: getRandomText(),
    });
  }
  return comments;
};

const createPicture = (id) => ({
  id,
  url: `${URL_PHOTO_BASE}photos/${getRandomInt(1, 25)}.jpeg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
  comments: createComments(),
  scale: getRandomInt(SCALE_MIN * 100, SCALE_MAX * 100) / 100,
  angle: getRandomInt(ANGLE_MIN, ANGLE_MAX),
  avatar: `${URL_AVATAR_BASE}${getRandomInt(1, 6)}.jpeg`,
  name: getRandomArrayElement(NAMES),
});

const createPictures = (count) => {
  const pictures = [];
  for (let i = 0; i < count; i++) {
    pictures.push(createPicture(i + 1));
  }
  return pictures;
};

const createPictureElement = (picture) => {
  const template = document.querySelector('#picture').content.cloneNode(true);

  const pictureElement = template.querySelector('.picture');
  const img = pictureElement.querySelector('.picture__img');
  const likesElement = pictureElement.querySelector('.picture__likes');
  const commentsElement = pictureElement.querySelector('.picture__comments');

  img.src = picture.url;
  img.alt = picture.description;
  likesElement.textContent = picture.likes;
  commentsElement.textContent = picture.comments.length;

  pictureElement.dataset.id = picture.id;

  return pictureElement;
};

const renderPictures = (pictures) => {
  const container = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.appendChild(createPictureElement(picture));
  });

  container.appendChild(fragment);
};

export { PICTURES_COUNT, createPictures, createPictureElement, renderPictures };
