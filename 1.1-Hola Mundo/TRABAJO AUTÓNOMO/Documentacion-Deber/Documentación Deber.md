# Realizar proyecto "Hola Mundo" en NestJS, Django y .Net

## ¿Cómo realizar un proyecto "Hola Mundo en NestJS"?

## Requisitos:

### 1. Instalar Node.js

Para instalar Node.js es tan simple como instalar un programa habitual.
En el link de abajo podrás instalar Node.js desde su página oficial.
[**Link Node.js**](https://nodejs.org/en/download)

### 2. Instalar CLI de NestJS

Para poder crear un proyecto en NestJS, antes debemos instalar su gestor de paquetes. Para instalar la CLI de NestJS debemos ejecutar el siguiente comando en el **"símbolo del sistema"**:

```cmd
npm install -g @nestjs/cli
```

Para saber si tenemos instalado NestJS, debemos ejecutar el siguiente comando:

```cmd
nest --version
```

Asi sabremos si tenemos instalado la CLI de NestJS y la versión que tenemos

## Realizar el proyecto

### 1. Crear el proyecto

Para crear un nuevo proyecto en NestJS debemos ejecutar el siguiente comando, reemplazando "**project_name**" por el nombre de el proyecto que queremos crear:

```cmd
nest new project_name
```

### 2. Mandar a correr el Proyecto

Una vez creado el proyecto, dentro de el archivo **"app.service.ts"** saldrá la función con el "**Hola Mundo**".
Mientras que en el archivo "**main.ts**", estará el número de la dirección de nuestro servidor, por defecto está el número "**3000**" .

Para mandar a correr el proyecto, debemos ejecutar el siguiente comando:

```cmd
npm run start
```

## ¿Cómo realizar un proyecto "Hola Mundo en Django"?

## Requisitos:

### 1. Descargar Python

Para poder crear un proyecto en Django, debemos primero instalar Python. En el link de abajo está el link para poder instalar Python.
[**Link Python**](https://www.python.org/downloads/)

A diferencia de Node.js, para instalar Python debemos realizar una pequeña modificación, ya que a la hora de ejecutar el instalador de Python, debemos marcar las siguientes casillas:
<image src="Images\python casilla.png">

En la parte inferior se encuentran dos casillas, lo importante es que tengas activada la casilla "**Add python.exe to PATH**", pero si puedes activar ambas, es mucho mejor.

<image src="Images\python casilla marcada.png">


## 2. Descargar Django

Para descargar Django, debes abrir el Símbolo del sistema de windows y ejecutar el siguiente comando:

```cmd
pip install django
```

Este paso no puedes hacerlo sin antes **[[Documentación Deber#1. Descargar Python | Instalar Python]]**.
Para verificar que esta instalado Django, debes ejecutar el siguiente comando:

```cmd
pip freeze
```

Este comando te mostrará la versión que tienes de Django.

## Realizar el Proyecto

### 1. Crear el proyecto

Para crear un proyecto de django, deberás ejecutar el siguiente comando en el Símbolo del sistema, reemplazando "**project_name**" por el nombre de tu proyecto:

```cmd
django-admin startproject project_name
```

Así crearas tu proyecto y se creará una carpeta con el nombre de tu proyecto y un archivo con el nombre "**manage.py**".

### 2. Abrimos el proyecto con VSCode

Dentro de la consola, ingresamos el siguiente comando:

```cmd
cd project_name
```

Después debemos abrir el proyecto con VSCode; usualmente el proyecto se abre en VSCode con el comando:

```cmd
code .
```

Pero si no se abre, dirígete a la carpeta en la cual guardaste tu proyecto y arrastra la carpeta "**project_name**" a VSCode.

### 3. Crear archivo views.py

Al momento de entrar en nuestro proyecto, te deberá salir una pantalla con la siguiente:

<image src="Images\proyecto pyrhon.png">

Y al desplegar la carpeta, nos van a salir los siguientes archivos:

<image src="Images\proyecto pyrhon1.png">

Dentro de esta carpeta vamos a crear un nuevo archivo llamado "**views.py**":

<image src="Images\proyecto pyrhon2.png">

Después de crear el archivo "**views.py**", ingresamos el siguiente código al archivo:

```typescript
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hola Mundo!")
```

Aquí estamos definiendo la función "**index**" y haciendo que nos de una respuesta a la solicitud que le vamos a hacer del **"Hola Mundo!"**.

### 4. Modificar archivo urls.py

Ahora nos dirigimos al archivo llamado "**urls.py**", el cual contiene un código como el siguiente:

<image src="Images\urls.png">

A este código vamos a modificar la url y vamos a añadir una nueva de la siguiente forma:

<image src="Images\urls modified.png">

### 5. Ejecutar el servidor

Una vez que hallamos realizado todos los pasos anteriores, ahora debemos mandar a correr nuestro proyecto dentro del servidor de Django con el siguiente comando dentro de la terminal de VSCode o el Símbolo del Sistema:

```cmd
python manage.py runserver
```

Al ejecutar ese comando, nos saldrá una pantalla como la siguiente:

<image src="Images\terminal djano.png">

Solo nos quedaría ingresar a la dirección que se muestra en la pantalla anterior, al ingresar en esa dirección, nos debería aparecer una pantalla parecida a la siguiente:

<image src="Images\hola mundo django.png">

## ## ¿Cómo realizar un proyecto "Hola Mundo en .Net"?

## Requisitos:

### 1. Descargar dotnet

Para descargar dotnet, debes ingresar en el link de abajo y descargarlo como cualquier otro programa.
[Link dotnet](https://dotnet.microsoft.com/en-us/download/dotnet)

Dentro de ese link podrás instalar la versión que desees, pero recuerda que a la hora de instalarlo debes tomar en cuenta que debes de instalar la versión correcta de tu computadora, sea Linux, Windows o Mac.

<image src="Images\sdk.png">

## Realizar el proyecto

### 1. Crear el proyecto

Para crear un proyecto de .Net, debes ingresar al Símbolo del Sistema y ejecutar el siguiente comando:

```cmd
dotnet new type -o project_name
```

**type**: en esta parte es la especificación del proyecto, ya que en .net de pueden crear diferentes tipos de proyectos, estos son los que se pueden crear:

<image src="Images\type project.png">

**-o**: esto se refiere a la salida del proyecto, en el caso de "**o**", esta inicial significa "**output**"

### 2. Abrir proyecto en VSCode

Después de crear nuestro proyecto, debes abrirlo con VSCode o cualquier otro editor de código que tengas; en el caso de VSCode, te saldrá una pantalla como la siguiente:

<image src="Images\.net project.png">

### 3. Correr el Proyecto

Por último, debemos correr el proyecto, en este caso el proyecto creado fue de tipo "**consola**" o "**console**". En el archivo **"Program.cs"** nos aparecerá un código como el siguiente:

![[Pasted image 20240408231134.png]]

Aquí se encuentra nuestro hola mundo, ahora solo nos queda correr nuestro proyecto.
Para correr el proyecto debemos abrir la "**Terminal**" y ejecutar el siguiente comando:

```cmd
dotnet run
```

Como nuestro proyecto es de tipo "**console**", nuestro proyecto se va a ejecutar en la consola de la siguiente manera:

<image src="Images\terminal debug .net.png">

### ASI DE FACIL PUEDES CREAR TUS PRIMEROS PROYECTOS EN NESTJS, DJANGO Y .NET
