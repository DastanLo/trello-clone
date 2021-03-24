import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from '../models/card.schema';
import { CreateCardDto } from '../dto/create-card.dto';

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
