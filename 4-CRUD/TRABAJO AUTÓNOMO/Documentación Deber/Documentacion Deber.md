# CRUD de Criaturas en NestJS con Prisma y Swagger

Este documento proporciona una descripción detallada de un CRUD (Create, Read, Update, Delete) implementado en una aplicación NestJS utilizando Prisma como ORM (Object-Relational Mapping) y Swagger para la documentación de la API.

## Qué es CRUD?

El CRUD se refiere a las operaciones básicas de creación, lectura, actualización y eliminación de datos. En este caso, se trata de un CRUD para administrar criaturas en una aplicación.

## Tecnologías Utilizadas

- **NestJS**: Un framework de Node.js para la creación de aplicaciones escalables y eficientes del lado del servidor.
- **Prisma**: Un ORM para bases de datos SQL y NoSQL, que proporciona una forma sencilla y segura de interactuar con la base de datos.
- **Swagger**: Una herramienta de código abierto para documentar APIs RESTful.

## Antes de Comenzar

### Instalar NestJS

```bash
npm i -g @nestjs/cli
```

### Instalar Prisma

```bash
npm install prisma --save-dev
```

### Instalar Swagger

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

```
src/
├── creatures/
│ ├── creatures.controller.ts
│ ├── creatures.module.ts
│ ├── creatures.service.ts
│ ├── dto/
│ │ ├── create-creature.dto.ts
│ │ └── update-creature.dto.ts
├── prisma/
│ └── prisma.service.ts
```

## Implementación del Servicio de Criaturas

El servicio de criaturas (`creatures.service.ts`) proporciona los métodos para realizar operaciones CRUD en la base de datos:

```typescript
import { Injectable } from '@nestjs/common';
import { CreateCreatureDto } from './dto/create-creature.dto';
import { UpdateCreatureDto } from './dto/update-creature.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreaturesService {
  constructor(private prisma: PrismaService) {}

  create(createCreatureDto: CreateCreatureDto) {
    return this.prisma.creature.create({ data: createCreatureDto });
  }

  findAllAlive() {
    return this.prisma.creature.findMany({
      where: { extinct: false },
    });
  }

  findExtinct() {
    return this.prisma.creature.findMany({
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.creature.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCreatureDto: UpdateCreatureDto) {
    return this.prisma.creature.update({
      where: { id },
      data: updateCreatureDto,
    });
  }

  remove(id: number) {
    return this.prisma.creature.delete({
      where: { id },
    });
  }
}
```

### Descripción de Métodos:

- **create()**: Crea una nueva criatura en la base de datos.
- **findAllAlive()**: Obtiene todas las criaturas que no están extintas.
- **findExtinct()**: Obtiene todas las criaturas que están extintas.
- **findOne()**: Obtiene una criatura por su ID.
- **update()**: Actualiza una criatura existente.
- **remove()**: Elimina una criatura por su ID.

## Uso de Swagger

Se integra Swagger para documentar la API y permitir a los desarrolladores visualizar y probar fácilmente los endpoints.

## Generación de Recurso con Prisma

Para generar un recurso con Prisma, se utiliza el siguiente comando:

```bash
npx prisma generate resource creatures
```

Este comando generará los modelos, servicios y controladores necesarios para interactuar con la tabla `creatures` en la base de datos.

## Configuración de Prisma

Para configurar Prisma, se siguen los siguientes pasos:

1. Crear una instancia de PostgreSQL.
2. Configurar el archivo `prisma/schema.prisma` con los detalles de la conexión a la base de datos y los modelos de datos.
3. Ejecutar `npx prisma migrate dev` para crear las tablas en la base de datos.
4. Ejecutar `npx prisma generate` para generar el cliente de Prisma.
5. (Opcional) Ejecutar `npx prisma db seed` para inicializar la base de datos con datos de prueba.

## Conclusiones

Con esta implementación, se tiene un servicio completo para administrar criaturas en una aplicación NestJS, utilizando Prisma para la interacción con la base de datos y Swagger para la documentación de la API.
