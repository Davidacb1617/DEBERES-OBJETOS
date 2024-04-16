import { CatsService } from './cats.service';
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
import { create } from 'domain';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  //GET /cats --> getAllCats
  @Get()
  getAllCats(@Query('color') color: 'black' | 'white' | 'brown') {
    return this.catsService.getCats(color);
  }
  //GET /cats/:id --> getCatById
  @Get(':id')
  getCatById(@Param('id') id: string) {
    return this.catsService.getCat(+id);
  }
  //POST /cats
  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }
  //PUT /cats:id --> updateCat
  @Put(':id')
  updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.updateCat(+id, updateCatDto);
  }
  //DELETE /cats:id --> deleteCat
  @Delete(':id')
  removeCat(@Param('id') id: string) {
    return this.catsService.removeCat(+id);
  }
}
