import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<any> {
    return this.cardsService.create(createCardDto);
  }

  @Post('task')
  createTask(@Body() task: UpdateCardDto): Promise<any> {
    return this.cardsService.createTask(task);
  }

  @Post('task/remove')
  removeTask(@Body() task: UpdateCardDto): Promise<any> {
    return this.cardsService.removeTask(task);
  }

  @Get()
  getAll(@Query('id') id: string): Promise<any> {
    return this.cardsService.getAll(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.cardsService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() card: CreateCardDto): Promise<any> {
    return this.cardsService.update(id, card);
  }
}
