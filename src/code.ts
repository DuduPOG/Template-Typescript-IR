/*
3. Faça um programa que ordene os elementos de um array. Use o método SORT
da classe Array para ordenar de forma decrescente, passando uma função arrow como parâmetro.
3.1 Escreva um teste com o array [‘carro’, ’boneco’, ’ave’, ‘lapis’]
*/
console.log(`Atividade 3: Ordenar os elementos de um array de forma decrescente usando o método sort()\n\n`);
export const objetos = ['carro', 'boneco', 'ave', 'lapis'];

console.log(`Lista original: ${objetos}\n`);
objetos.sort( (a, b) => b.localeCompare(a) );
console.log(`Lista ordenada por ordem alfabética reversa: ${objetos}\n`);
objetos.sort( (a, b) => b.length - a.length );
console.log(`Lista ordenada pelo tamanho decrescente das strings: ${objetos}`);