// requiring express and instantiating router
const express       = require("express");
const router        =   express.Router()



router.get("/staffStatusReport", (req, res)=>{
    res.render("staffStatusReport")
    //res.send(" hello, this is the staff registraion point")
})
router.get("/financeStatusReport", (req, res)=>{
    res.render("financeReport")
    //res.send(" hello, this is the staff registraion point")
})
router.get("/PayrollReport", (req, res)=>{
    res.render("PayrollReport")
    //res.send(" hello, this is the staff registraion point")
})


module.exports = router