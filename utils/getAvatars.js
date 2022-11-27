const getAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 1000);
  return `https://avatars.dicebear.com/api/bottts/${randomAvatar}.svg`;
};

export default getAvatar;
