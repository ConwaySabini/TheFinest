import { hashPassword } from '@/libs/auth';
import prisma from '@/libs/prismadb';

const register = async (req, res) => {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'This request only supports POST requests' });
  }
  const { firstName, lastName, email, password } = req.body;
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }
  try {
    // prisma check if user with given email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    // return error if user already exists
    if (existingUser) {
      res.status(422).json({ message: 'User exists already!' });
      return;
    }
    const hash = hashPassword(password);
    await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
      },
    });

    // return success message
    res.status(201).json({ message: 'Created user!' });
  } catch (err) {
    return res.status(503).json({ err: err.toString() });
  }
};

export default register;
