// import {
//   avatar1,
//   avatar2,
//   avatar3,
//   avatar4,
//   avatar5,
// } from '../public/Images/index';

let nextImages = [
  '/avatar1.png',
  '/avatar2.png',
  '/avatar3.png',
  '/avatar4.png',
  '/avatar5.png',
];

const getAvatar = () => {
  let randomNum = Math.floor(Math.random() * nextImages.length);
  return nextImages[randomNum];
};

export default getAvatar;
