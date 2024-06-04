# Documentación del Ejercicio "Grade School"

Este ejercicio se enfoca en la gestión de estudiantes y sus grados en una escuela, utilizando TypeScript para implementar las operaciones básicas de gestión de datos.

## Descripción del Problema

El objetivo es crear una clase `GradeSchool` que permita gestionar la lista de estudiantes por grado, proporcionando métodos para agregar estudiantes a un grado específico, eliminar estudiantes y obtener la lista de estudiantes por grado.

## Estructura de la Clase GradeSchool

La clase `GradeSchool` tiene los siguientes atributos y métodos:

- **Atributo `students`**: Un objeto donde cada clave es el número de grado y el valor es un arreglo de nombres de estudiantes en ese grado.
- **Método constructor**: Inicializa la clase `GradeSchool` con un objeto vacío de estudiantes.
- **Método `roster()`**: Devuelve un objeto que representa el roster completo de la escuela, donde cada clave es el número de grado y el valor es un arreglo de nombres de estudiantes ordenados alfabéticamente.
- **Método `add(name: string, grade: number)`**: Agrega un estudiante al grado especificado, asegurándose de mantener los nombres ordenados alfabéticamente.
- **Método `removeStudent(name: string)`**: Elimina un estudiante de todos los grados donde esté presente.
- **Método `grade(grade: number)`**: Devuelve un arreglo de nombres de estudiantes para un grado específico, ordenados alfabéticamente.

## Implementación de la Clase

```typescript
/**
 * Interfaz que define la estructura de los estudiantes por grado.
 */
interface Students {
  [key: number]: string[];
}

/**
 * Clase para manejar la lista de estudiantes por grado en una escuela.
 */
export class GradeSchool {
  private students: Students;

  /**
   * Constructor de la clase GradeSchool.
   * Inicializa la lista de estudiantes como un objeto vacío.
   */
  constructor() {
    this.students = {};
  }

  /**
   * Devuelve el roster completo de la escuela, organizado por grados y ordenado alfabéticamente por nombre.
   * @returns Un objeto donde cada clave es el número de grado y el valor es un arreglo de nombres de estudiantes.
   */
  roster(): Students {
    let newRoster: Students = {};
    for (const [grade, names] of Object.entries(this.students)) {
      newRoster[parseInt(grade)] = names.slice().sort();
    }
    return newRoster;
  }

  /**
   * Agrega un estudiante al grado especificado.
   * @param name El nombre del estudiante a agregar.
   * @param grade El número de grado donde se agregará el estudiante.
   */
  add(name: string, grade: number) {
    this.removeStudent(name); // Elimina al estudiante de todos los grados antes de agregarlo nuevamente

    this.students[grade] = this.students[grade] || [];
    this.students[grade].push(name);
    this.students[grade].sort(); // Ordena los nombres alfabéticamente
  }

  /**
   * Elimina un estudiante de todos los grados donde esté presente.
   * @param name El nombre del estudiante a eliminar.
   */
  removeStudent(name: string) {
    for (const grade in this.students) {
      if (this.students[grade].includes(name)) {
        this.students[grade].splice(this.students[grade].indexOf(name), 1);
      }
    }
  }

  /**
   * Devuelve un arreglo de nombres de estudiantes para un grado específico.
   * @param grade El número de grado del cual se desea obtener la lista de estudiantes.
   * @returns Un arreglo de nombres de estudiantes ordenados alfabéticamente.
   */
  grade(grade: number): string[] {
    return (this.students[grade] || []).slice().sort();
  }
}
```

## Uso de la Clase GradeSchool

```typescript
// Ejemplo de uso de la clase GradeSchool
const school = new GradeSchool();

school.add('Anna', 2);
school.add('Barbara', 1);
school.add('Charlie', 2);
school.add('David', 1);

console.log(school.roster());
// Salida esperada:
// {
//   1: ['Barbara', 'David'],
//   2: ['Anna', 'Charlie']
// }

school.add('Edward', 1);
console.log(school.grade(1));
// Salida esperada: ['Barbara', 'David', 'Edward']

school.removeStudent('David');
console.log(school.grade(1));
// Salida esperada: ['Barbara', 'Edward']
```
