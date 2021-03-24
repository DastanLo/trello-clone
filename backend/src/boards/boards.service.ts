import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board, BoardDocument } from '../models/board.schema';
import { CreateBoardDto } from '../dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return null;
  }

  getAll() {
    return null;
  }

  remove(id: string) {
    return null;
  }
}
