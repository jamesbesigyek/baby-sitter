// module dependencies
var
mongoose = require("mongoose")
bcryptjs = require("bcryptjs")

// create user schema

var UserSchema = mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    
    password: {
      type: String,
      required:true,
      unique:true,
    },
    created_on: {
      type: Date,
      default: Date.now
    }
});

//schema methods

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create user model

var UserModel = mongoose.model('User', UserSchema);

// Export module

module.exports = UserModel;