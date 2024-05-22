export enum ResistorValues {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

type Color = keyof typeof ResistorValues;

export function decodedValue([firstColor, secondColor]: Color[]) {
  return Number(`${ResistorValues[firstColor]}${ResistorValues[secondColor]}`);
}
