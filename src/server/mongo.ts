import { env } from '@/env';
import mongoose from 'mongoose';


export interface IComment extends Document {
    postId: string;
    content: string;
    username: string;
    createdAt: Date;
}

type CommentModelType = mongoose.Model<IComment>;


const Schema = mongoose.Schema;

mongoose.connect(env.DATABASE_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});
mongoose.Promise = global.Promise;

export const db = {
    Comment: commentModel()
};

// mongoose models with schema definitions

function commentModel() {
    const comment_schema = new Schema({
        postId: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    return mongoose.models.Comment as CommentModelType ?? mongoose.model('Comment', comment_schema);
}