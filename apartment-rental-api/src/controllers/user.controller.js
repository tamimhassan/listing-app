import { User } from '../models/user.model';

export const userById = async (req, res, next, id) => {
  await User.findById(id).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};

export const hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id === req.auth._id;

  if (!authorized) {
    return res.status(403).json({
      error: 'User is not authorized to perform this action',
    });
  }
  next();
};
