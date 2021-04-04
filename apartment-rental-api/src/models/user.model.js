const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  name: String,

  email: String,

  hashed_password: String,

  apartments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Apartment',
    },
  ],

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
