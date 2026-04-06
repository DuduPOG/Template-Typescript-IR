/*
5. Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array, passando uma função arrow como parâmetro.
5.1 Escreva um teste com o array [8, 3, 9, 5, 6, 12]
*/

console.log(`Atividade 5: Mostrar os números pares de uma lista usando o método filter()\n\n`);
const outrosNumeros = [8, 3, 9, 5, 6, 12];

console.log(`Lista original: ${outrosNumeros}\n`);
export const numPares = outrosNumeros.filter((element) => element % 2 == 0 );

console.log(`Apenas os números pares da lista: ${numPares}`);