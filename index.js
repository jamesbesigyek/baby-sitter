const express       = require("express");
const app           = express();
const bodyParser    = require("body-parser");
const path          = require("path")

const router        = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(router)
app.listen(5000, (req, res)=>{console.log("listening on port 5000")})

let viewpath = path.join(__dirname,"views") 
app.set("view engine", "pug")
app.set("views", viewpath)

//importing routes

const loginRoutes        = require("./contoller/loginRoutes")
const registerRoutes     = require("./contoller/registerRoutes")
app.use("/",loginRoutes)
app.use("/",registerRoutes)





