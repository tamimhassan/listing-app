import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },

  salt: String,

  created: {
    type: Date,
    default: Date.now,
  },

  updated: Date,
});

// Vartual field
userSchema
  .virtual('password')
  .set(function (password) {
    // create temporary variable called _password
    this._password = password;
    //generate a timestamp
    this.salt = uuidv4();
    // encryptPassword()
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (password) {
    return this.encryptPassword(password) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha256', this.salt)
        .update(password)
        .digest('hex');
    } catch (error) {
      return '';
    }
  },
};

export const User = mongoose.model('User', userSchema);
