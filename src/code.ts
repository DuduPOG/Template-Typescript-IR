/*
1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array, use as seguintes estratégias:
a. iterando com for simples
b. iterando com forEach
1.1 Escreve um teste com o array [3,5,7,3,8,9,1]
*/

console.log(`Atividade 1: Calcular o quadrado de cada elemento do array\n\n`);
export const lista = [3, 5, 7, 3, 8, 9, 1];

export const listaAoQuadrado = [...lista];

export const listaAoQuadrado2 = [...lista];

for (let i = 0; i < lista.length; ++i){
    listaAoQuadrado[i] = listaAoQuadrado[i] ** 2;
}

listaAoQuadrado2.forEach((element, index, array) => {
    array[index] = element ** 2;
});

console.log(`Lista original: ${lista}\n`);
console.log(`Pelo for tradicional: ${listaAoQuadrado}\n`);
console.log(`Pelo forEach: ${listaAoQuadrado2}`);