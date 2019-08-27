import mongoose from '../db/db';
const Schema = mongoose.Schema;

export const ForwardSchema = new Schema({
    rounds:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    match:{
        type:String,
        required:true
    },
    odds:{
        type:String,
        required:true
    },
    forward:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

export const ForwardModel = mongoose.model("forwards", ForwardSchema);
