/*
4. Faça um programa que leia o array pegue apenas os dois primeiros elementos. Use o método SLICE da classe Array.
4.1 Escreva um teste com o array [2,4,6,2,8,9,5]
*/

console.log(`Atividade 4: Mostrar apenas os 2 primeiros elementos da lista usando o método slice()\n\n`);
export const numeros = [2, 4, 6, 2, 8, 9, 5];
export const cortados = numeros.slice(0, 2);

console.log(`Lista original: ${numeros}\n`);
console.log(`Apenas os 2 primeiros números: ${cortados}`);