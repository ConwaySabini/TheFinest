const bcrypt = require('bcrypt');

export const hashPassword = async (password: string) => {
  const hash = bcrypt.hash(password, 10);
  return hash;
};

export const comparePassword = async (password, hashedPassword) => {
  const isPassword = bcrypt.compareSync(password, hashedPassword);
  return isPassword;
};
