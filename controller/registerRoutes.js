// requiring express and instantiating router
const express       = require("express");
const bcryptjs      = require("bcryptjs")
const router        =   express.Router()
const mongoose      =require("mongoose")
const Post          = require("../models/models")

//connecting to the  mongo database 

mongoose.connect("mongodb://localhost:27017/JBC", ()=>{
  console.log(" connected to the database ")
});



router.get("/registerStaff", (req, res)=>{
    res.render("staffRegistration")
    //res.send(" hello, this is the staff registraion point")
})
router.get("/registerClient", (req, res)=>{
    res.render("clientRegistration")
    //res.send(" hello, this is the staff registraion point")
})
router.get("/registerAppointment", (req, res)=>{
    res.render("appointmentRegistration")
    //res.send(" hello, this is the staff registraion point")
})

router.post("/registerStaff",async(req,res)=>{
    const staffRegister = new Post(req.body); //create an instance of the StaffRegister model for data entered(req.body==got from the user)
    console.log(req.body)
    const username = req.body.username
    //const password = req.body.password
    try {
      
          await staffRegister.save();
          console.log("Item has been saved");
          const items = await Post.find();
          res.send("Thanks for registering a new staff");
     //}
    } catch (err) {
      //.catch promise and used because nodejs asyncronously waits
      res.status(500).send("unable to save to database");
      console.log("Error :" +err);
    }

})


module.exports = router

