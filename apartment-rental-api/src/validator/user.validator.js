import { body, validationResult } from 'express-validator';
import { User } from '../models/user.model';

export const signUpValidator = () => {
  return [
    body('name')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Name is required!')
      .isLength({ min: 3 })
      .withMessage('Minimum 3 characters.'),

    body('email')
      .not()
      .trim()
      .isEmpty()
      .withMessage('E-mail is required!')
      .isEmail()
      // .normalizeEmail()
      .withMessage('E-mail is not valid!')
      .custom((value) => {
        console.log(value);
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject('E-mail already in use');
          }
        });
      }),

    body('password')
      .not()
      .isEmpty()
      .withMessage('password is required!')
      .isLength({ min: 6 })
      .withMessage('Password must contain at least 6 characters')
      .not()
      .isIn(['123456', '654321, 12345678, 87654321'])
      .withMessage('Do not use a common word as the password')
      .matches(/\d/)
      .withMessage('Password must contain a number')
      .matches(/[a-zA-Z]/)
      .withMessage('Password must contain a character'),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const firstError = errors.array().map((error) => error.msg)[0];
  return res.status(400).json({
    error: firstError,
  });
};
