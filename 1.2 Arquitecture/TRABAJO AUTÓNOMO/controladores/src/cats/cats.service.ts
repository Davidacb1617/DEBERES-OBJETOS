import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private cats = [
    { id: 1, name: 'Cat 1', age: 2, color: 'black' },
    { id: 2, name: 'Cat 2', age: 1, color: 'white' },
    { id: 3, name: 'Cat 3', age: 5, color: 'brown' },
  ];

  getCats(color?: 'black' | 'white' | 'brown') {
    if (color) {
      return this.cats.filter((cat) => cat.color === color);
    }
    return this.cats;
  }

  getCat(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      throw new Error('Cat not Found');
    }
    return cat;
  }

  createCat(createCatDto: CreateCatDto) {
    const newCat = {
      ...createCatDto,
      id: Date.now(),
    };
    this.cats.push(newCat);
    return newCat;
  }

  updateCat(id: number, updateCatDto: UpdateCatDto) {
    this.cats = this.cats.map((cat) => {
      if (cat.id === id) {
        return { ...cat, ...updateCatDto };
      }

      return cat;
    });
    return this.getCat(id);
  }

  removeCat(id: number) {
    const toBeRemoved = this.getCat(id);

    this.cats = this.cats.filter((cat) => cat.id !== id);

    return toBeRemoved;
  }
}
