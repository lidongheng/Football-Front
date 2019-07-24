import mongoose from '../db/db';
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
    likes: [
        {
            user: {
                type:Schema.Types.ObjectId,
                ref:"users"
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    }
});

export const CommentModel = mongoose.model("comment", CommentSchema);
