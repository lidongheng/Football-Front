import mongoose from '../db/db';
const Schema = mongoose.Schema;
export const ForecastSchema = new Schema({
    team:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    percent:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    url:{
        type:String
    }
});

export const ForecastModel = mongoose.model("forecast", ForecastSchema);
