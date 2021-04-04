import express from 'express';
import { signUpValidator, validate } from '../validator/user.validator';
import authControllers from '../controllers/auth.controller';
const { signUp, signIn, signOut } = authControllers;

const router = express.Router();

router.post('/signup', signUpValidator(), validate, signUp);
router.post('/signin', signIn);
router.get('/signout', signOut);

// any route containing :user id our app will first execute userById()
// router.param('userId', userById);

export default router;
