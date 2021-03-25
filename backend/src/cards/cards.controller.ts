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

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}
  @Post()
  create(@Body() createCardDto: CreateCardDto): Promise<any> {
    return this.cardsService.create(createCardDto);
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
