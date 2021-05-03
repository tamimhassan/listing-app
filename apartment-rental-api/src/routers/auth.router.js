import express from 'express';
import { userById } from '../controllers/user.controller';
import {
  signUpValidator,
  resetPasswordValidation,
  validate,
} from '../validator';
import {
  signIn,
  signUp,
  signOut,
  resetPassword,
  forgotPassword,
} from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signUpValidator(), validate, signUp);
router.post('/signin', signIn);
router.get('/signout', signOut);

router.post('/forgot-password', forgotPassword);
router.post(
  '/reset-password',
  resetPasswordValidation(),
  validate,
  resetPassword,
);

// any route containing :userId our app will first execute userById()
router.param('userId', userById);

export default router;
