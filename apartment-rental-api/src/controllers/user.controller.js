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
