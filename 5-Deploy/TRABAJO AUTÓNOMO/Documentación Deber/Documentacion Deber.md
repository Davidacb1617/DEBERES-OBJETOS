Claro, con gusto agregaré la documentación de la creación de un deploy con Railway al texto que me proporcionaste, especificando los pasos y explicando qué hace cada código y cada parte. Aquí está la documentación completa:

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
npx nest generate resource creatures
```

Este comando generará los modelos, servicios y controladores necesarios para interactuar con la tabla `creatures` en la base de datos.

## Configuración de Prisma

Para configurar Prisma, se siguen los siguientes pasos:

1. Crear una instancia de PostgreSQL.
2. Configurar el archivo `prisma/schema.prisma` con los detalles de la conexión a la base de datos y los modelos de datos.
3. Ejecutar `npx prisma migrate dev` para crear las tablas en la base de datos.
4. Ejecutar `npx prisma generate` para generar el cliente de Prisma.
5. (Opcional) Ejecutar `npx prisma db seed` para inicializar la base de datos con datos de prueba.

# Despliegue (Deploy) en Railway

Railway es una plataforma en la nube que permite desplegar aplicaciones web y APIs de manera sencilla. A continuación, se detallan los pasos para desplegar esta aplicación NestJS con Prisma y Swagger en Railway.

## Preparación del Proyecto

Antes de iniciar el proceso de despliegue, es necesario realizar algunos ajustes en el proyecto para que sea compatible con Railway.

1. **Ajustar el archivo `main.ts`**:

En el archivo `main.ts`, modifica la línea que inicia el servidor para que utilice la variable de entorno `PORT` proporcionada por Railway:

```typescript
await app.listen(process.env.PORT || 3000);
```

Esto permitirá que Railway asigne un puerto dinámico y evitará conflictos con otros proyectos en la misma instancia.

2. **Ajustar los scripts en `package.json`**:

En el archivo `package.json`, agrega el siguiente script en la sección `"scripts"`:

```json
"postinstall": "npx prisma generate && npm run build"
```

Este script se ejecutará automáticamente después de instalar las dependencias del proyecto. Generará el cliente de Prisma (`npx prisma generate`) y compilará la aplicación (`npm run build`).

Además, modifica el script `start:prod` para que apunte al archivo compilado:

```json
"start:prod": "node dist/src/main"
```

Este script se utilizará para iniciar la aplicación en el entorno de producción de Railway.

## Creación de la Instancia en Railway

1. **Iniciar sesión en Railway**:

Accede a [https://railway.app](https://railway.app) e inicia sesión con tu cuenta de Railway (puedes crear una nueva si aún no tienes una).

2. **Crear un nuevo proyecto**:

En el panel de control de Railway, haz clic en "New Project".

3. **Conectar con GitHub**:

En la sección "Deploy from GitHub, GitLab or Bitbucket", selecciona "GitHub" y autoriza el acceso a tus repositorios de GitHub.

4. **Seleccionar el repositorio**:

Una vez autorizado, Railway te mostrará una lista de tus repositorios de GitHub. Selecciona el repositorio que contiene tu aplicación NestJS con Prisma y Swagger.

## Configuración de Railway

1. **Configurar variables de entorno**:

En la pestaña "Variables" de Railway, agrega las variables de entorno necesarias para tu aplicación, como las credenciales de la base de datos.

2. **Configurar settings**:

En la pestaña "Settings" de Railway, realiza las siguientes configuraciones:

- **Build Command**: `npm run postinstall`
- **Watch Paths**: `/src/**/*.ts`
- **Start Command**: `npm run start:prod`

Asegúrate de dar clic en el visto de cada cajita de texto para guardar los cambios.

3. **Generar dominio**:

En la pestaña "Settings", haz clic en "Generate Domain" para generar un dominio temporal para tu aplicación.

## Despliegue Final

1. **Iniciar despliegue**:

Da clic en el enlace del dominio generado para iniciar el proceso de despliegue.

2. **Verificar los logs**:

Una vez completado el despliegue, verifica que no haya errores en los logs de Railway.

3. **Probar la aplicación**:

Prueba tu aplicación desplegada utilizando Postman o cualquier otra herramienta para realizar solicitudes HTTP y verificar que el CRUD funcione correctamente.
