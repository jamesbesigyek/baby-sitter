// module dependencies

const express       = require("express");
const session       = require("express-session")
const bodyParser    = require("body-parser");
const path          = require("path")
const mongoose      = require("mongoose")
const bcryptjs      = require("bcryptjs")
const router        = express.Router()
const mongodbStore = require('connect-mongo')(session);

// create app instance

const app           = express();

const port          = 4000;

// module variables

/* var 
app.locals.errMsg = app.locals.errMsg || null; */


// npm installed and required passport for authentication

const passport      = require("passport")



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(router)
app.listen(port, (req, res)=>{console.log(`listening on port ${port}`)})

const viewpath = path.join(__dirname,"views") 
app.set("view engine", "pug")
app.set("views", viewpath)

//connecting to the  mongo database 

mongoose.connect("mongodb://localhost:27017/JBC",()=>{
  console.log(" connected to the database ")
});



//setting up express session

app.use(session({
  secret:"true",
  saveUninitialized:"true",
  resave:"true",
}))

//initialize passport

app.use(passport.initialize())
app.use(passport.session())


//importing routes

const loginRoutes        = require("./controller/loginRoutes")
const registerRoutes     = require("./controller/registerRoutes")
const reportsRoutes     = require("./controller/reportsRoutes")
app.use("/",loginRoutes)
app.use("/",registerRoutes)
app.use("/",reportsRoutes)



module.exports  = app





