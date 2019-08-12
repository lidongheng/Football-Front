import mongoose from '../db/db';
mongoose.set('useFindAndModify', false)

// @ts-ignore
const Schema = mongoose.Schema;

export const BetSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    serialNumber:{
        type:String,
        required:true
    },
    league:{
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
    handicap: {
        type:String,
        required:true
    },
    profit: {
        type:String,
        required:true
    },
    amount: {
        type:Number,
        default:10
    },
    isDelete:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now
    }
});

export const BetModel = mongoose.model("bet", BetSchema);
