### Paso 1: Instalación y Configuración de Prisma

1. **Instalación de Prisma CLI**:

   Para empezar, asegúrate de tener instalado el Prisma CLI globalmente en tu sistema ejecutando el siguiente comando en tu terminal:

   ```bash
   npm install prisma -g
   ```

   o

   ```bash
   npm i prisma -D
   ```

   La segunda opción se trata acerca de la abreviación `--save-dev` el cual es una opción para desarrolladores.

2. **Inicialización de Prisma**:

   Luego, dentro de tu proyecto de Node.js, inicializa Prisma ejecutando el siguiente comando en tu terminal:

   ```bash
   npx prisma init --datasource-provider proveedor
   ```

   Esto creará una estructura de archivos inicial para tu proyecto Prisma.

### Paso 2: Configuración del Modelo de Datos

1. **Definición del Modelo de Base de Datos (schema.prisma)**:

   En el archivo `schema.prisma`, define los modelos de datos para tu base de datos. Por ejemplo:

   ```prisma
   model User {
     id        Int      @id @default(autoincrement())
     name      String
     age       String
   }
   ```

### Paso 3: Generación de Migraciones y Aplicación de Cambios

1. **Generación de Migraciones**:

   Genera una nueva migración para tus modelos de datos ejecutando el siguiente comando:

   ```bash
   npx prisma migrate dev
   ```

   Esto generará un archivo de migración en la carpeta `prisma/migrations` que contiene los cambios necesarios para aplicar el modelo de datos.

2. **Aplicación de Migraciones**:

   Aplica la migración a tu base de datos ejecutando el siguiente comando:

   ```bash
   npx prisma migrate deploy
   ```

   Esto aplicará los cambios del modelo de datos a tu base de datos.

### Paso 4: Creación de Seeds

1. **Definición de Seeds (seed.ts)**:

   Crea un archivo `seed.ts` en la raíz de tu proyecto y define datos de prueba para tu base de datos. Por ejemplo:

   ```typescript
   import { PrismaClient } from '@prisma/client';
   const prisma = new PrismaClient();
   async function main() {
     await prisma.user.create({
       data: {
         name: 'Juan',
         age: '32',
       },
     });
   }

   main()
     .catch((error) => {
       console.error(error);
       process.exit(1);
     })
     .finally(async () => {
       await prisma.$disconnect();
     });
   ```

### Paso 5: Ejecución de Seeds

1. **Ejecución de Seeds**:

   Ejecuta el script de seeds para insertar los datos en tu base de datos ejecutando el siguiente comando:

   ```bash
   npx prisma db seed
   ```

   Esto insertará los datos de prueba definidos en tu archivo de seeds en tu base de datos.

### Paso 6: Verificación de los Datos

1. **Verificación de los Datos en la Base de Datos**:

   Accede a tu base de datos para verificar que los datos de prueba se hayan insertado correctamente.

### Conclusión

¡Ahora has configurado Prisma y creado seeds para insertar datos de prueba en tu base de datos! Puedes continuar desarrollando tu aplicación utilizando Prisma como tu ORM para interactuar con la base de datos.
