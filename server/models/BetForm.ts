import mongoose from '../db/db';
mongoose.set('useFindAndModify', false)

// @ts-ignore
const Schema = mongoose.Schema;

export const BetFormSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    league:{
        type:String,
        required:true
    },
    rounds:{
        type:String,
        required:true
    },
    host:{
        type:String,
        required:true
    },
    away:{
        type:String,
        required:true
    },
    matchTime:{
        type:String,
        required:true
    },
    isSingleMatch:{
        type:Number,
        required:true
    },
    analysis: {
        type:String,
        required:true
    },
    hostInjury: {
        type:String,
        required:true
    },
    awayInjury: {
        type:String,
        required:true
    },
    hostExpectLineup: {
        type:String,
        required:true
    },
    awayExpectLineup: {
        type:String,
        required:true
    },
    hostExpectBench: {
        type:String,
        required:true
    },
    awayExpectBench: {
        type:String,
        required:true
    },
    hostNews: {
        type:String,
        required:true
    },
    awayNews: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

});

export const BetFormModel = mongoose.model("betForm", BetFormSchema);
