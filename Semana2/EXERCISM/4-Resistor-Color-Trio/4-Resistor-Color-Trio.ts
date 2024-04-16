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

export function decodedResistorValue(colors: Color[]): string {
  const mainValue = `${ResistorValues[colors[0]]}${ResistorValues[colors[1]]}`;
  const zeros = 10 ** ResistorValues[colors[2]];
  const valueInOhms = Number(mainValue) * zeros;

  if (valueInOhms >= 1e9) {
    return `${valueInOhms / 1e9} gigaohms`;
  } else if (valueInOhms >= 1e6) {
    return `${valueInOhms / 1e6} megaohms`;
  } else if (valueInOhms >= 1e3) {
    return `${valueInOhms / 1e3} kiloohms`;
  } else {
    return `${valueInOhms} ohms`;
  }
}
