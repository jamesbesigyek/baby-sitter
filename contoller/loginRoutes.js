// requiring express and instantiating router
const express       = require("express");
const router        =   express.Router()



router.get("/", (req, res)=>{
    res.render("login")
    //res.send(" hello, this is the landing site")
})

router.post("/login",(req,res)=>{
    console.log(req.body)
       
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