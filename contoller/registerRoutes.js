// requiring express and instantiating router
const express       = require("express");
const router        =   express.Router()



router.get("/registerStaff", (req, res)=>{
    res.render("staffRegistration")
    //res.send(" hello, this is the staff registraion point")
})


module.exports = router