// @ts-ignore
import mongoose from 'mongoose';

// @ts-ignore
const Schema = mongoose.Schema;

export const companySchema = new Schema({
    cid:{
        type:Number,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    }
});

export const companyModel = mongoose.model("company", companySchema);
