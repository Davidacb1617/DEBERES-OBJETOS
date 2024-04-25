export function toRna(dnaStrand: string): string {
  const complement: { [key: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  let rnaStrand = '';

  for (let nucleotide of dnaStrand) {
    if (!Object.hasOwn(complement, nucleotide)) {
      //A pesar del error dentro de VSCode, el código funciona
      throw new Error('Invalid input DNA.');
    }
    rnaStrand += complement[nucleotide];
  }

  return rnaStrand;
}
