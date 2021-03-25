import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board, BoardDocument } from '../models/board.schema';
import { CreateBoardDto } from '../dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
  ) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    try {
      const board = new this.boardModel(createBoardDto);
      return board.save();
    } catch (e) {
      throw new HttpException('something went wrong', HttpStatus.BAD_REQUEST);
    }
  }

  async getAll(id): Promise<Array<BoardDocument>> {
    return this.boardModel.find({ user: id });
  }

  async remove(id): Promise<Board> {
    return this.boardModel.findByIdAndDelete(id);
  }
}
