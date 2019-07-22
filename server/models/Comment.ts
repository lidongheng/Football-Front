// @ts-ignore
import mongoose from 'mongoose';
// @ts-ignore
const Schema = mongoose.Schema;

export const CommentSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    content: {
        type:String,
        required:true
    },
    like: {
        type:Number,
        default:0
    },
    unlike: {
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

export const CommentModel = mongoose.model("comment", CommentSchema);
