import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from '../dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {
  }

  @Post()
  create(@Body() createBoardDto: CreateBoardDto): Promise<any> {
    return this.boardsService.create(createBoardDto);
  }

  @Get()
  getAll(@Query('id') id: string): Promise<any> {
    return this.boardsService.getAll(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    console.log(id);
    return this.boardsService.remove(id);
  }
}
