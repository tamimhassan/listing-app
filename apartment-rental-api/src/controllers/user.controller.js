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
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!authorized) {
    return res.status(403).json({
      error: 'User is not authorized to perform this action',
    });
  }
  next();
};

export const getAllUser = async (req, res) => {
  await User.find()
    .select('_id email name')
    .exec((error, users) => {
      if (error || !users) {
        return res.status(400).json({ error });
      }
      res.status(200).json({ users });
    });
};

export const getSingleUser = async (req, res) => {
  if (!req.profile) {
    return res.status(400).json({
      error: 'User is not found.',
    });
  }
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;

  res.status(200).json({
    user: req.profile,
  });
};

export const updateSingleUser = async (req, res) => {
  await User.findByIdAndUpdate(
    { _id: req.profile._id },
    { ...req.body, updated: Date.now() },
    { new: true },
  ).exec((error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: 'You are not authorized to perform this action',
      });
    }

    user.hashed_password = undefined;
    user.salt = undefined;
    res.status(200).json({ user });
  });
};

export const deleteSingleUser = async (req, res) => {
  await User.findByIdAndRemove(req.profile._id).exec((error, deletedUser) => {
    if (error || !deletedUser) {
      return res.status(400).json({
        error: error,
      });
    }
    res.status(200).json({
      message: 'User delete Successfilly.',
    });
  });
};
