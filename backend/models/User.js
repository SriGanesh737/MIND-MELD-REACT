const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    required: [true, 'Email is required']
  },
  password:{
    type: String,
    required: [true, 'Password is required']
  },
  firstname:{
    type: String,
    required: [true, 'First name is required']
  },
  lastname:{
    type: String,
    required: [true, 'Last name is required']
  },
  phone:{
    type: String,
    required: [true, 'Phone number is required']
  },
  gender:{
    type: String,
    default: ' '
  },
  profile_image_link:{
    type: String,
    default: 'https://th.bing.com/th/id/OIP.z4no5tqp2ryBdMMD5NU9OgHaEv?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  },
  doj:{
    type: Date,
    default: Date.now
  },
  token:{
    type: String,
    default: ''
  },
  role:{
    type: String,
    default: 'user'
  },
}, {timestamps: true});

const User = mongoose.models["user_model"] || mongoose.model('user_model', userSchema);

module.exports = User;