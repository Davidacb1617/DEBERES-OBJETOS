### Paso 1: Definición de DTOs

1. **Definir DTO para Crear Gato (create-cat.dto.ts)**:

   ```typescript
   export class CreateCatDto {
     name: string;
     age: number;
     color: 'black' | 'white' | 'brown';
   }
   ```

2. **Definir DTO para Actualizar Gato (update-cat.dto.ts)**:

   ```typescript
   import { PartialType } from '@nestjs/mapped-types';
   import { CreateCatDto } from './create-cat.dto';

   export class UpdateCatDto extends PartialType(CreateCatDto) {}
   ```

   ### Paso 2: Creación del Servicio de Gatos

   1. **Implementar la Lógica de Negocio (cats.service.ts)**:

   ```typescript
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
   ```

### Paso 3: Creación del Controlador de Gatos

1. **Definir las Rutas de los Endpoints (cats.controller.ts)**:

   ```typescript
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
   import { CreateCatDto } from './dto/create-cat.dto';
   import { UpdateCatDto } from './dto/update-cat.dto';

   @Controller('cats')
   export class CatsController {
     constructor(private readonly catsService: CatsService) {}

     @Get()
     getAllCats(@Query('color') color: 'black' | 'white' | 'brown') {
       return this.catsService.getCats(color);
     }

     @Get(':id')
     getCatById(@Param('id') id: string) {
       return this.catsService.getCat(+id);
     }

     @Post()
     createCat(@Body() createCatDto: CreateCatDto) {
       return this.catsService.createCat(createCatDto);
     }

     @Put(':id')
     updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
       return this.catsService.updateCat(+id, updateCatDto);
     }

     @Delete(':id')
     removeCat(@Param('id') id: string) {
       return this.catsService.removeCat(+id);
     }
   }
   ```

### Paso 4: Probar los Endpoints en Postman

1. **Enviar Solicitudes HTTP a los Endpoints**:
   - Utiliza Postman para enviar solicitudes GET, POST, PUT y DELETE a los endpoints definidos en el controlador de gatos.
   - Puedes probar la obtención de todos los gatos, la obtención de un gato por su ID, la creación de un nuevo gato, la actualización de un gato existente y la eliminación de un gato existente.

### Conclusión

¡Ahora tienes un controlador de gatos completamente funcional en NestJS que maneja las operaciones CRUD utilizando los decoradores proporcionados por el framework! Puedes probar y validar la funcionalidad de estos endpoints utilizando Postman para enviar solicitudes HTTP y observar las respuestas correspondientes.
