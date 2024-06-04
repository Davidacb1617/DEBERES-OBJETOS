# Formularios en Angular con Ng-zorro

## ¿Qué es Ng-zorro?

Ng-zorro es una biblioteca de componentes UI para Angular basada en el popular framework de diseño Ant Design. Proporciona un conjunto rico de componentes reutilizables que se pueden integrar fácilmente en aplicaciones Angular.

## Tecnologías Utilizadas

- **Angular**: Un framework para la construcción de aplicaciones web dinámicas y escalables.
- **Ng-zorro**: Una biblioteca de componentes UI basada en Ant Design para Angular.

## Antes de Comenzar

### Instalar Angular CLI

- Si aún no tienes Angular CLI instalado, puedes instalarlo usando el siguiente comando:

```bash
npm install -g @angular/cli
```

### Crear un Proyecto Angular

- Crea un nuevo proyecto Angular usando Angular CLI:

```bash
ng new angular-ng-zorro-forms
cd angular-ng-zorro-forms
```

### Instalar Ng-zorro

- Instala Ng-zorro en tu proyecto:

```bash
ng add ng-zorro-antd
```

### Levantar la Aplicación

- Levanta la aplicación en el puerto `localhost:4200`:

```bash
ng serve -o
```

## Configuración del Proyecto

### Importar Modulo de Formularios y Ng-zorro

Asegúrate de importar los módulos necesarios en `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Crear Formulario Reactivo

### Definir el Formulario en el Componente

En el componente principal `app.component.ts`, define el formulario reactivo:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
```

### Diseñar el Formulario en la Plantilla

En `app.component.html`, diseña el formulario utilizando los componentes de Ng-zorro:

```html
<form
  nz-form
  [formGroup]="validateForm"
  (ngSubmit)="submitForm()"
>
  <nz-form-item>
    <nz-form-label
      [nzFor]="'userName'"
      nzRequired
      >Nombre de Usuario</nz-form-label
    >
    <nz-form-control nzErrorTip="Por favor ingrese su nombre de usuario">
      <input
        nz-input
        formControlName="userName"
        id="'userName'"
      />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label
      [nzFor]="'email'"
      nzRequired
      >Email</nz-form-label
    >
    <nz-form-control nzErrorTip="Por favor ingrese un email válido">
      <input
        nz-input
        formControlName="email"
        id="'email'"
      />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label
      [nzFor]="'password'"
      nzRequired
      >Contraseña</nz-form-label
    >
    <nz-form-control nzErrorTip="Por favor ingrese su contraseña">
      <input
        nz-input
        type="password"
        formControlName="password"
        id="'password'"
      />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-control>
      <button
        nz-button
        nzType="primary"
      >
        Enviar
      </button>
    </nz-form-control>
  </nz-form-item>
</form>
```

## Validación y Mensajes de Error

Ng-zorro facilita la validación de formularios y la visualización de mensajes de error. En el ejemplo anterior, los mensajes de error se configuran utilizando el atributo `nzErrorTip` en `nz-form-control`.

## Resumen de Funcionalidad

- **Formulario Reactivo**: Utiliza `FormBuilder` para crear un formulario reactivo con validaciones.
- **Componente de Formulario de Ng-zorro**: Utiliza componentes como `nz-form`, `nz-input` y `nz-button` para construir el formulario.
- **Validación**: Implementa validaciones y muestra mensajes de error usando `nzErrorTip`.

## Código Completo

### Componente Principal (App)

**HTML (app.component.html)**:

```html
<form
  nz-form
  [formGroup]="validateForm"
  (ngSubmit)="submitForm()"
>
  <nz-form-item>
    <nz-form-label
      [nzFor]="'userName'"
      nzRequired
      >Nombre de Usuario</nz-form-label
    >
    <nz-form-control nzErrorTip="Por favor ingrese su nombre de usuario">
      <input
        nz-input
        formControlName="userName"
        id="'userName'"
      />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label
      [nzFor]="'email'"
      nzRequired
      >Email</nz-form-label
    >
    <nz-form-control nzErrorTip="Por favor ingrese un email válido">
      <input
        nz-input
        formControlName="email"
        id="'email'"
      />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label
      [nzFor]="'password'"
      nzRequired
      >Contraseña</nz-form-label
    >
    <nz-form-control nzErrorTip="Por favor ingrese su contraseña">
      <input
        nz-input
        type="password"
        formControlName="password"
        id="'password'"
      />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-control>
      <button
        nz-button
        nzType="primary"
      >
        Enviar
      </button>
    </nz-form-control>
  </nz-form-item>
</form>
```

**TypeScript (app.component.ts)**:

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
```

**Módulo Principal (app.module.ts)**:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Conclusión

Ng-zorro facilita la creación de formularios en Angular con componentes estilizados y funcionales. Utilizando los módulos y componentes proporcionados por Ng-zorro, puedes construir formularios interactivos y validaciones eficientes en tus aplicaciones Angular.
