export function isPangram(sentance: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCaseSentence = sentance.toLowerCase();
  return alphabet
    .split('')
    .every((letter) => lowerCaseSentence.includes(letter));
}
