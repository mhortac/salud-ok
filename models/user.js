const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    idnumber: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, trim: true, required: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },
    terms_conds: { type: String },
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
