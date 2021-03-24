import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Board } from './board.schema';
import * as mongoose from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop({ default: [] })
  tasks: string[];

  @Prop({ required: true })
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Board' })
  board: Board;
}

export const CardSchema = SchemaFactory.createForClass(Card);
