import mongoose from '../db/db';
const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    league:{
        type:String
    },
    club:{
        type:String,
        required:true
    },
    clubEname:{
        type:String,
        required:true
    },
    player:{
        type:String,
        required:true
    },
    number:{
        type:Number
    },
    nation:{
        type:String
    },
    position:{
        type:String,
        required:true
    },
    attr:{
        type:String,
        required:true
    },
    importance:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

export const PlayerModel = mongoose.model("players", PlayerSchema);
