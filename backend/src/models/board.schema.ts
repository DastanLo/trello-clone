import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  background: string;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
