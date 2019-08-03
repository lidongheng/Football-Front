import mongoose from '../db/db';
const Schema = mongoose.Schema;
export const AdminSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    des: {
        type: String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String
    },
    key: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    autoLogin: {
        type: Boolean
    },
    date:{
        type:Date,
        default:Date.now
    }

});

export const AdminModel = mongoose.model("admins", AdminSchema);
