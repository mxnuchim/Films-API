import { Document, Types } from 'mongoose';

export interface Comment extends Document {
  content: string;
  film_id: Types.ObjectId;
}
