const mongoose          = require("mongoose")
const bcryptjs          = require("bcryptjs")

const loginSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
    type:String,
    uniqu:true,},
    gender:String,
    role:String,
    password:String,
})


const Post = module.exports = mongoose.model("StaffRegister",loginSchema)

module.exports.createUser =(newUser, CallBack)=>{
    bcryptjs.genSalt(10,(err,salt)=>{
        bcryptjs.hash(newUser.password,salt,(err,hash)=>{
            newUser.password = hash
            newUser.save(CallBack)
        })
    })

}

 module.exports.getUserByUsername = (username, callback)=>{
    var query = {username: username};
    User.findOne(query, callback);
}
  
module.exports.getUserById = (id, callback)=>{
    User.findById(id, callback);
}
  
module.exports.comparePassword = (candidatePassword, hash, callback)=>{
    bcrypt.compare(candidatePassword, hash, (err, isMatch)=> {
      if(err) throw err;
      callback(null, isMatch);
    });
} 
    
