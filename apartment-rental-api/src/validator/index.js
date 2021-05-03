import { body, check, validationResult } from 'express-validator';
import { User } from '../models/user.model';

export const signUpValidator = () => {
  return [
    body('name')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Name is required!')
      .isLength({ min: 3 })
      .withMessage('Name length minimum 3 characters.'),

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

export const resetPasswordValidation = () => {
  return [
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
// export const apartmentCreateValidation = () => {
//   return [
//     body('name')
//       .not()
//       .trim()
//       .isEmpty()
//       .withMessage('Name is required!')
//       .isLength({ min: 3 })
//       .withMessage('Name must contain 3 characters.'),

//     body('description')
//       .not()
//       .trim()
//       .isEmpty()
//       .withMessage('Description is required!')
//       .isLength({ min: 5 })
//       .withMessage('Description must contain 5 characters.'),

//     body('floor_size')
//       .not()
//       .trim()
//       .isEmpty()
//       .withMessage('Floor size is required!'),

//     body('price_per_month')
//       .not()
//       .trim()
//       .isEmpty()
//       .withMessage('Price per month is required!'),
//   ];
// };

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
