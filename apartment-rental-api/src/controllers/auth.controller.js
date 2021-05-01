import { User } from '../models/user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import expressJwt from 'express-jwt';
// const { sendEmail } = require('../helpers');

export const signUp = async (req, res) => {
  const newUser = await User.create(req.body);

  await newUser.save((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: error,
      });
    }
    res.status(200).json({
      message: 'Signup success! Please signin.',
    });
  });
};

export const signIn = async (req, res) => {
  // found the user based on email
  const { email, password } = req.body;
  await User.findOne({ email }, (error, user) => {
    // Checking whether email is exist or not
    if (error || !user) {
      return res.status(401).json({
        error:
          "User with this e-mail doesn't exist! Please create a account or enter correct e-mail.",
      });
    }

    // Checking whether passwod match or not
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Password do not match',
      });
    }

    // Generate a token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Persist the token as 't' in cookie with expiry date
    res.cookie('t', token, { expire: new Date() + 9999 });

    // Return response with user and token to frontend client
    const { _id, email, name } = user;
    return res.status(200).json({
      token,
      user: { _id, email, name },
    });
  });
};

export const signOut = async (req, res) => {
  await res.clearCookie('t');
  return res.status(200).json({ message: 'Signout success!' });
};

export const requireSignin = expressJwt({
  // if token is valid , express jwt appends the varified users id
  // in an auth key to the request object
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth',
});

// add forgotPassword and resetPassword methods
// exports.forgotPassword = (req, res) => {
//   if (!req.body) return res.status(400).json({ message: 'No request body' });
//   if (!req.body.email)
//     return res.status(400).json({ message: 'No Email in request body' });

//   console.log('forgot password finding user with that email');
//   const { email } = req.body;
//   console.log('signin req.body', email);
//   // find the user based on email
//   User.findOne({ email }, (err, user) => {
//     if err or no user
//     if (err || !user)
//       return res.status('401').json({
//         error: 'User with that email does not exist!',
//       });

//     // generate a token with user id and secret
//     const token = jwt.sign(
//       { _id: user._id, iss: 'NODEAPI' },
//       process.env.JWT_SECRET,
//     );

//     // email data
//     const emailData = {
//       from: 'noreply@node-react.com',
//       to: email,
//       subject: 'Password Reset Instructions',
//       text: `Please use the following link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`,
//       html: `<p>Please use the following link to reset your password:</p> <p>${process.env.CLIENT_URL}/reset-password/${token}</p>`,
//     };

//     return user.updateOne({ resetPasswordLink: token }, (err, success) => {
//       if (err) {
//         return res.json({ message: err });
//       } else {
//         sendEmail(emailData);
//         return res.status(200).json({
//           message: `Email has been sent to ${email}. Follow the instructions to reset your password.`,
//         });
//       }
//     });
//   });
// };

// to allow user to reset password
// first you will find the user in the database with user's resetPasswordLink
// user model's resetPasswordLink's value must match the token
// if the user's resetPasswordLink(token) matches the incoming req.body.resetPasswordLink(token)
// then we got the right user

// exports.resetPassword = (req, res) => {
//   const { resetPasswordLink, newPassword } = req.body;

//   User.findOne({ resetPasswordLink }, (err, user) => {
//     // if err or no user
//     if (err || !user)
//       return res.status('401').json({
//         error: 'Invalid Link!',
//       });

//     const updatedFields = {
//       password: newPassword,
//       resetPasswordLink: '',
//     };

//     user = _.extend(user, updatedFields);
//     user.updated = Date.now();

//     user.save((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       res.json({
//         message: `Great! Now you can signin with your new password.`,
//       });
//     });
//   });
// };

// exports.socialLogin = (req, res) => {
//   // try signup by finding user with req.email
//   let user = User.findOne({ email: req.body.email }, (err, user) => {
//     if (err || !user) {
//       // create a new user and login
//       user = new User(req.body);
//       req.profile = user;
//       user.save();
//       // generate a token with user id and secret
//       const token = jwt.sign(
//         { _id: user._id, iss: 'NODEAPI' },
//         process.env.JWT_SECRET,
//       );
//       res.cookie('t', token, { expire: new Date() + 9999 });
//       // return response with user and token to frontend client
//       const { _id, name, email } = user;
//       return res.json({ token, user: { _id, name, email } });
//     } else {
//       // update existing user with new social info and login

//       req.profile = user;
//       user = _.extend(user, req.body);
//       user.updated = Date.now();
//       user.save();
//       // generate a token with user id and secret
//       const token = jwt.sign(
//         { _id: user._id, iss: 'NODEAPI' },
//         process.env.JWT_SECRET,
//       );
//       res.cookie('t', token, { expire: new Date() + 9999 });
//       // return response with user and token to frontend client
//       const { _id, name, email } = user;
//       return res.json({ token, user: { _id, name, email } });
//     }
//   });
// };
