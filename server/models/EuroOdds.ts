// @ts-ignore
import mongoose from 'mongoose';

// @ts-ignore
const Schema = mongoose.Schema;

export const EuroOddsSchema = new Schema({
    match:{
        type:Schema.Types.ObjectId,
        ref:"betforms"
    },
    companyId:{
        type:Number,
        required:true
    },
    winOdd: {
        type:String,
        required:true
    },
    drawOdd: {
        type:String,
        required:true
    },
    loseOdd: {
        type:String,
        required:true
    },
    isDelete: {
        type:Boolean,
        default:0
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

export const EuroOddsModel = mongoose.model("EuroOdds", EuroOddsSchema);
