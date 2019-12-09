const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Register = new Schema({
  StaffFirstName: {
    type: String
  },
  StaffLastName: {
    type: String
  },
  StaffTelephone: {
    type: String
  },
  StaffEmail: {
    type: String
  },
  StaffPassword: {
    type: String
  },
 
},
{
    collection: 'registers'
});

module.exports = mongoose.model('Register', Register);