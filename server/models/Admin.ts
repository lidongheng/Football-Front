import mongoose from '../db/db';
const Schema = mongoose.Schema;
export const AdminSchema = new Schema({
    username:{
        type:String,
        required:true
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
    date:{
        type:Date,
        default:Date.now
    }

});

export const AdminModel = mongoose.model("admins", AdminSchema);
