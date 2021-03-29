import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { Card, CardDocument } from '../models/card.schema';
import { CreateCardDto } from '../dto/create-card.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    try {
      const card = new this.cardModel(createCardDto);
      return card.save();
    } catch (e) {
      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async createTask(task): Promise<UpdateWriteOpResult> {
    const newTask = {
      _id: nanoid(),
      text: task.text,
    };
    return this.cardModel.updateOne(
      { _id: task.card },
      {
        $push: {
          tasks: newTask,
        },
      },
    );
  }

  async removeTask(task): Promise<UpdateWriteOpResult> {
    return this.cardModel.updateOne(
      { _id: task.card },
      {
        $pull: {
          tasks: { _id: task.id },
        },
      },
    );
  }

  async getAll(id): Promise<Array<CardDocument>> {
    return this.cardModel.find({ board: id });
  }

  async remove(id): Promise<Card> {
    return this.cardModel.findByIdAndDelete(id);
  }

  async update(id, card: CreateCardDto): Promise<any> {
    return this.cardModel.updateOne(
      { board: id },
      {
        $set: {
          title: card.title,
        },
      },
    );
  }
}
