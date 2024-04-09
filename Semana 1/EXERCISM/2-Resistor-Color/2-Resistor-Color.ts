export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']


export const colorCode = (color: string):number => {
let code = COLORS.indexOf(color)
  return code;
}