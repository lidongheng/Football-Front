import mongoose from '../db/db';
const Schema = mongoose.Schema;

export const TeamSchema = new Schema({
    league:{
        type:String,
        required:true
    },
    club:{
        type:String,
        required:true
    },
    ChineseName:{
        type:String,
        required:true
    },
    style:{
        type:String
    },
    recentMatch:[
        {
            league:{
                type:String
            },
            match:{
                type:String
            },
            time:{
                type:String
            },
            isDelete:{
                type:Boolean,
                default:false
            }
        }
    ]
});

export const TeamModel = mongoose.model("Teams", TeamSchema);
