# Comunicación entre Componentes Padre e Hijo en Angular con @Input y @Output

Este documento proporciona una descripción detallada sobre cómo manejar la comunicación entre componentes padre e hijo en Angular utilizando los decoradores `@Input()` y `@Output()`.

## ¿Qué son @Input y @Output?

En Angular, `@Input()` y `@Output()` son decoradores que se utilizan para gestionar el flujo de datos entre componentes. `@Input()` permite que un componente padre pase datos a un componente hijo, mientras que `@Output()` permite que un componente hijo emita eventos que pueden ser escuchados y manejados por un componente padre.

## Tecnologías Utilizadas

- **Angular**: Un framework para la construcción de aplicaciones web dinámicas y escalables.

## Antes de Comenzar

### Instalar Angular CLI

- Si aún no tienes Angular CLI instalado, puedes instalarlo usando el siguiente comando:

```bash
npm install -g @angular/cli
```

- Levantar la aplicación en el puerto `localhost:4200`

```bash
ng serve -o
```

- Crear componente padre

```bash
ng g c father
```

- Crear componente Hijo

```bash
ng g c child
```

## Estructura del Proyecto

El proyecto tendrá la siguiente estructura para ilustrar la comunicación entre un componente padre e hijo:

```
src/
├── app/
│   ├── child/
│   │   ├── child.component.ts
│   │   ├── child.component.html
│   │   ├── child.component.css
│   ├── father/
│   │   ├── father.component.ts
│   │   ├── father.component.html
│   │   ├── father.component.css
│   ├── app.module.ts
│   ├── app.component.ts
│   ├── app.component.html
```

## Implementación de @Input

### Definición de @Input en el Componente Hijo

El decorador `@Input()` se utiliza para definir una propiedad en el componente hijo que puede recibir datos desde el componente padre.

```typescript
// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() parentMessageInput: string = String();
  @Output() childMessageEventOutput = new EventEmitter<string>();
  parentMessageViewChild = String();

  sendMessage() {
    this.childMessageEventOutput.emit('Jefe, los iphone 13 están listos');
  }
}
```

En este ejemplo, `parentMessageInput` es una propiedad de entrada que puede recibir un valor del componente padre.

### Enlace de Datos desde el Componente Padre

El componente padre pasa un valor a la propiedad de entrada del componente hijo utilizando binding de propiedad.

```typescript
// father.component.ts
import {
  Component,
  AfterContentInit,
  ContentChild,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    ChildComponent,
  ],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements AfterViewInit, AfterContentInit {
  parentMessageInput =
    'Quiero que estén listos los iphone 13 para el lanzamiento de la nueva versión de la app de mensajería instantánea';
  childMessageEventOutput = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ContentChild('projectedContent', { static: true })
  projectedContent!: ElementRef;

  receiveMessage($event: string) {
    this.childMessageEventOutput = $event;
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.childComponent.parentMessageViewChild =
        'El jefe revisa que los empleados estén trabajando en los iphone 13';
    });
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log(
        'El contenido proyectado es:',
        this.projectedContent.nativeElement.textContent
      );
    }
  }
}
```

```html
<!-- father.component.html -->
<div style="padding: 20px">
  <h1>Apple</h1>
  <nz-card nzTitle="Jefe de Apple 👨‍🦰:">
    <div class="borderVariables">
      <div>Variable del Padre:</div>
      <div>{{ parentMessageInput }}</div>
      <div>{{ childMessageEventOutput }}</div>
    </div>
    <div class="border">
      Hijo usando &#64;Output:
      <h3>{{ childMessageEventOutput }}</h3>
    </div>
    <app-child
      [parentMessageInput]="parentMessageInput"
      (childMessageEventOutput)="receiveMessage($event)"
    >
      <div class="border">
        Padre usando &#64;ContentChild:
        <h3>Por aquí el jefe de la empresa se comunica con el empleado</h3>
      </div>
    </app-child>
  </nz-card>
</div>
```

En este ejemplo, `parentMessageInput` es una propiedad del componente padre que se enlaza a `parentMessageInput` del componente hijo.

## Implementación de @Output

### Definición de @Output en el Componente Hijo

El decorador `@Output()` se utiliza para definir una propiedad de evento en el componente hijo que puede emitir eventos al componente padre.

```typescript
// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() parentMessageInput: string = String();
  @Output() childMessageEventOutput = new EventEmitter<string>();
  parentMessageViewChild = String();

  sendMessage() {
    this.childMessageEventOutput.emit('Jefe, los iphone 13 están listos');
  }
}
```

En este ejemplo, `childMessageEventOutput` es una propiedad de evento que emite un mensaje cuando se llama a `sendMessage`.

### Manejo del Evento en el Componente Padre

El componente padre escucha el evento emitido por el componente hijo y define una función para manejarlo.

```html
<!-- father.component.html -->
<div style="padding: 20px">
  <h1>Apple</h1>
  <nz-card nzTitle="Jefe de Apple 👨‍🦰:">
    <div class="borderVariables">
      <div>Variable del Padre:</div>
      <div>{{ parentMessageInput }}</div>
      <div>{{ childMessageEventOutput }}</div>
    </div>
    <div class="border">
      Hijo usando &#64;Output:
      <h3>{{ childMessageEventOutput }}</h3>
    </div>
    <app-child
      [parentMessageInput]="parentMessageInput"
      (childMessageEventOutput)="receiveMessage($event)"
    >
      <div class="border">
        Padre usando &#64;ContentChild:
        <h3>Por aquí el jefe de la empresa se comunica con el empleado</h3>
      </div>
    </app-child>
  </nz-card>
</div>
```

```typescript
// father.component.ts
import {
  Component,
  AfterContentInit,
  ContentChild,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    ChildComponent,
  ],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements AfterViewInit, AfterContentInit {
  parentMessageInput =
    'Quiero que estén listos los iphone 13 para el lanzamiento de la nueva versión de la app de mensajería instantánea';
  childMessageEventOutput = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ContentChild('projectedContent', { static: true })
  projectedContent!: ElementRef;

  receiveMessage($event: string) {
    this.childMessageEventOutput = $event;
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.childComponent.parentMessageViewChild =
        'El jefe revisa que los empleados estén trabajando en los iphone 13';
    });
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log(
        'El contenido proyectado es:',
        this.projectedContent.nativeElement.textContent
      );
    }
  }
}
```

En este ejemplo, cuando el componente hijo emite el evento `childMessageEventOutput`, el componente padre llama a la función `receiveMessage`, pasando el mensaje como argumento a través de `$event`.

## Descripción de Métodos

- **@Input()**: Marca una propiedad en el componente hijo como una propiedad de entrada que puede recibir datos del componente padre.
- **@Output()**: Marca una propiedad en el componente hijo como una propiedad de evento que puede emitir eventos manejados por el componente padre.
- **sendMessage()**: Emite un evento personalizado desde el componente hijo.
- **receiveMessage()**: Maneja el evento emitido por el componente hijo en el componente padre.

## Código Completo

### Componente Padre (Father)

**HTML (father.component.html)**:

```html
<div style="padding: 20px">
  <h1>Apple</h1>
  <nz-card nzTitle="Jefe de Apple 👨‍🦰:">
    <div class="borderVariables">
      <div>Variable del Padre:</div>
      <div>{{ parentMessageInput }}</div>
      <div>{{ childMessageEventOutput }}</div>
    </div>
    <div class="border">
      Hijo usando &#64;Output:
      <h3>{{ childMessageEventOutput }}</h3>
    </div>
    <app-child
      [parentMessageInput]="parentMessageInput"
      (childMessageEventOutput)="receiveMessage($event)"
    >
      <div class="border">
        Padre usando &#64;ContentChild:
        <h3>Por aquí el jefe de la empresa se comunica con el empleado</h3>
      </div>
    </app-child>
  </nz-card>
</div>
```

**TypeScript (father.component.ts)**:

```typescript
import {
  Component,
  AfterContentInit,
  ContentChild,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    ChildComponent,
  ],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements AfterViewInit, AfterContentInit {
  parentMessageInput =
    'Quiero que estén listos los iphone 13 para el lanzamiento de la nueva versión de la app de mensajería instantánea';
  childMessageEventOutput = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ContentChild('projectedContent', { static: true })
  projectedContent!: ElementRef;

  receiveMessage($event: string) {
    this.childMessageEventOutput = $event;
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.childComponent.parentMessageViewChild =
        'El jefe revisa que los empleados estén trabajando en los iphone 13';
    });
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log(
        'El contenido proyectado es:',
        this.projectedContent.nativeElement.textContent
      );
    }
  }
}
```

### Componente Hijo (Child)

**HTML (child.component.html)**:

```html
<div style="padding: 20px; box-shadow: 2px 10px 30px #888888">
  <nz-card nzTitle="Empleado de Apple 🙋‍♂️:">
    <div class="borderVariables">
      <div>Variables del Hijo:</div>
      <div>{{ parentMessageInput }}</div>
      <div>{{ childMessageEventOutput }}</div>
      <div>{{ parentMessageViewChild }}</div>
    </div>
    <div class="border">
      Padre usando &#64;Input:
      <h3>{{ parentMessageInput }}</h3>
    </div>
    <div class="border">
      Padre usando &#64;ViewChild:
      <h3>{{ parentMessageViewChild }}</h3>
    </div>

    <ng-content></ng-content>
  </nz-card>
  <button
    nz-button
    nzType="primary"
    (click)="sendMessage()"
  >
    Enviar Mensaje al Jefe
  </button>
</div>
```

**TypeScript (child.component.ts)**:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() parentMessageInput: string = String();
  @Output() childMessageEventOutput = new EventEmitter<string>();
  parentMessageViewChild = String();

  sendMessage() {
    this.childMessageEventOutput.emit('Jefe, los iphone 13 están listos');
  }
}
```

## Resumen de Funcionalidad

- **@Input()**: Se utiliza para pasar datos desde un componente padre a un componente hijo.
- **@Output()**: Se utiliza para emitir eventos desde un componente hijo a un componente padre.
- **sendMessage()**: Emite un evento personalizado desde el componente hijo.
- **receiveMessage()**: Maneja el evento emitido por el componente hijo en el componente padre.
