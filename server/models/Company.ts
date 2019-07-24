import mongoose from '../db/db';
const Schema = mongoose.Schema;

export const CompanySchema = new Schema({
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

export const CompanyModel = mongoose.model("company", CompanySchema);
