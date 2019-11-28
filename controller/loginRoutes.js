// requiring express and instantiating router
const express       = require("express");
const passport      = require("../config/passport")
const utilities     = require("../models/utilities")
const router        =   express.Router()
const Post          = require("../models/models")

//middleware

router.use(passport.initialize());
router.use(passport.session());



// system functions

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/login');
  }
var
  errHandler = utilities.errHandler,
  validationErr = utilities.validationErr,
  cr8NewUser = utilities.cr8NewUser,
  findUser = utilities.findUser,
  viewAllUsers = utilities.viewAllUsers,
  updateUser = utilities.updateUser,
  deleteUser = utilities.deleteUser;

//routes

//test route

router.get('/test', function (req, res) {
    return res.send('<marquee><h1>Welcome to the test page</h1></marquee>');
});


router.get("/", (req, res)=>{
    res.render("login")
    //res.send(" hello, this is the landing site")
})

router.post("/login",async(req, res, next)=>{
    /* passport.authenticate('local-login', (err, user, info)=> {
        if (err) {
         return next(err); // will generate a 500 error
        }
        if (!user) {
          return res.status(409).render('/login', {errMsg: info.errMsg});
        }
        req.login(user, (err)=>{
          if(err){
            console.error(err);
            return next(err);
          }
          return res.redirect('/test');
        });
    })(req, res, next);   return next(err); // will generate a 500 error
        }
        if (!user) {
          return res.status(409).render('/login', {errMsg: info.errMsg});
        }
        req.login(user, (err)=>{
          if(err){
            console.error(err);
            return next(err);
          }
          return res.redirect('/test');
        });
    })(req, res, next); */


    console.log(req.body)
    const login = new Post (req.body)
    console.log(login)
    try{
        const user = await this.find({user:username})
        //await login.()
        console.log("user found")
    }
    catch{
        console.log("failed to save to database")
    }
       
    var role = req.body.role
    switch(role){
        case "Administrator":
    
            res.render("adminlog")
            break
    
        case "Baby-sitter":
        
            res.render("babysitterlog")
            break
        
        case "Supervisor":
            res.render("supervisorlog")
            break
        default:
            res.send("you are not authorised to log in")
            break
    }
    
    
})
module.exports = router