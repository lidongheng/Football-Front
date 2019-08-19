import mongoose from '../db/db';
const Schema = mongoose.Schema;

export const TimelineSchema = new Schema({
    order:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },
    desc:{
        type:String
    }
});

export const TimelineModel = mongoose.model("Timelines", TimelineSchema);
