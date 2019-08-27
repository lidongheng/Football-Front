import mongoose from '../db/db';
const Schema = mongoose.Schema;

const recentMatchSchema = new Schema({
    league:{
        type:String
    },
    match:{
        type:String
    },
    time:{
        type:String
    },
    weekday:{
        type:String
    },
    period:{
        type:String
    },
    place:{
        type:String
    }
})

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
    recentMatch:[recentMatchSchema]
});

export const TeamModel = mongoose.model("Teams", TeamSchema);
