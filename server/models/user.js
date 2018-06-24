/**
 * project snowfest
 */
import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    vk_id:{
        type:String
    },
    fb_id:{
        type:String
    },
    inst_id:{
        type:String
    },
},
{
    timestamps: true
});

var Users = mongoose.model('Users', User)
module.exports = Users
