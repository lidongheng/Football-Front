import mongoose from '../db/db';
const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String,
        required:true
    },
    content: {
        type:String,
        required:true
    },
    label: {
        type:String,
        default:"资讯"
    },
    about: [
        {
            team:{
                type:Schema.Types.ObjectId,
                ref:"teams",
                required:true
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    }
});

export const ArticleModel = mongoose.model("article", ArticleSchema);
