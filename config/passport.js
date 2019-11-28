//module dependencies

const localStrategy = require("passport-local").Strategy
const user          = require("../models/models")
const utilities     = require("../models/utilities")
const config        = require("./config")
const passport      = require("passport")


//module variables

var
  host = config.host,
  errHandler = utilities.errHandler,
  LocalStrategy = require('passport-local').Strategy;



//used to serialize and deserialize user for a session

passport.serializeUser((user,done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=> {
    User.findById(id, (err, user)=> {
      if(err) {
        console.error('There was an error accessing the records of' +
        ' user with id: ' + id);
        return console.log(err.message);
      }
      return done(null, user);
    })
});


// Local strategy

passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},
(req, email, password, done)=> {
  process.nextTick(()=> {
    User.findOne({email: email}, (err, user)=> {
      if(err) {
        return errHandler(err);
        }
      if(user) {
        console.log('user already exists');
        return done(null, false, {errMsg: 'email already exists'});
      }
      else {
          var newUser = new User();
          newUser.username = req.body.username;
          newUser.email = email;
          newUser.password = newUser.generateHash(password);
          newUser.save((err)=> {
            if(err) {
              console.log(err);
              if(err.message == 'User validation failed') {
                console.log(err.message);
                return done(null, false, {errMsg: 'Please fill all fields'});
              }
              return errHandler(err);
              }
            console.log('New user successfully created...',newUser.username);
            console.log('email',email);
            console.log(newUser);
            return done(null, newUser);
          });
        }
    });
  });
}));

//local login

passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},
function(req, email, password, done) {
    User.findOne({email: email}, function(err, user) {
        if(err) {
          return errHandler(err);
          }
        if(!user) {
          return done(null, false, {errMsg: 'User does not exist, please' +
          ' <a class="errMsg" href="/signup">signup</a>'});
          }
        if(!user.validPassword(password)) {
          return done(null, false, {errMsg: 'Invalid password try again'});
          }
        return done(null, user);
    });

}));

//
module.exports = passport
