export class Matrix {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  get rows(): number[][] {
    return this.input
      .split('\n')
      .map((x) => x.split(' '))
      .map((x) => x.map((x) => +x));
  }

  get columns(): number[][] {
    let matrix = this.rows;
    let cols: number[][] = [];
    for (let i: number = 0; i < matrix[0].length; i++) {
      cols[i] = matrix.map((x) => x[i]);
    }

    return cols;
  }
}
