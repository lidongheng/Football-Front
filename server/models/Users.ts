
import mongoose from '../db/db';
const Schema = mongoose.Schema;
export const UserSchema = new Schema({
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
    date:{
        type:Date,
        default:Date.now
    }

});

export const UserModel = mongoose.model("users", UserSchema);

