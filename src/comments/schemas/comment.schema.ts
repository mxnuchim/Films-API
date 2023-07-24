import mongoose, { Types } from 'mongoose';
import { Comment } from '../interfaces/comment.interface';

export const CommentSchema = new mongoose.Schema<Comment>(
  {
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    film_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);
