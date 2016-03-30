const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  avatar: { type: String },
  signature: { type: String },
  date_in: { type: String, default: Date.now }
});

UserSchema.index({ username: 1 }, { unique: true });
UserSchema.index({ email: 1 }, { unique: true });

mongoose.model('User', UserSchema);
