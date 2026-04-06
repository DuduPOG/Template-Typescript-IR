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

for (let i = 0; i < lista.length; ++i) {
  listaAoQuadrado[i] = listaAoQuadrado[i] ** 2;
}

listaAoQuadrado2.forEach((element, index, array) => {
  array[index] = element ** 2;
});

console.log(`Lista original: ${lista}\n`);
console.log(`Pelo for tradicional: ${listaAoQuadrado}\n`);
console.log(`Pelo forEach: ${listaAoQuadrado2}`);

console.log();
console.log(`============================`);
console.log();


/*
2. Faça um Programa TypeScript que transforme o array, concatenando as strings com 1 (um) espaço (“ “). Utilize o método JOIN da classe Array, passando uma função arrow como parâmetro.
2.1 Escreva um teste com o array [‘Arrays’, ‘com’, ‘TypeScript’]
*/
console.log(`Atividade 2: Transformar um array através da concatenação das strings com 1 (um) espaço (" ") utilizando o método join()\n\n`);
export const strings = ['Arrays', 'com', 'TypeScript'];

const concatenar = (lista: Array<string>) => lista.join(' ');
export const formatado = concatenar(strings);
console.log(`Lista original: ${strings}\n`);
console.log(`Lista concatenada: ${formatado}`);

console.log();
console.log(`============================`);
console.log();


/*
3. Faça um programa que ordene os elementos de um array. Use o método SORT
da classe Array para ordenar de forma decrescente, passando uma função arrow como parâmetro.
3.1 Escreva um teste com o array [‘carro’, ’boneco’, ’ave’, ‘lapis’]
*/
console.log(`Atividade 3: Ordenar os elementos de um array de forma decrescente usando o método sort()\n\n`);
export const objetos = ['carro', 'boneco', 'ave', 'lapis'];

console.log(`Lista original: ${objetos}\n`);
objetos.sort((a, b) => b.localeCompare(a));
console.log(`Lista ordenada por ordem alfabética reversa: ${objetos}\n`);
objetos.sort((a, b) => b.length - a.length);
console.log(`Lista ordenada pelo tamanho decrescente das strings: ${objetos}`);

console.log();
console.log(`============================`);
console.log();


/*
4. Faça um programa que leia o array pegue apenas os dois primeiros elementos. Use o método SLICE da classe Array.
4.1 Escreva um teste com o array [2,4,6,2,8,9,5]
*/
console.log(`Atividade 4: Mostrar apenas os 2 primeiros elementos da lista usando o método slice()\n\n`);
const numeros = [2, 4, 6, 2, 8, 9, 5];
export const cortados = numeros.slice(0, 2);

console.log(`Lista original: ${numeros}\n`);
console.log(`Apenas os 2 primeiros números: ${cortados}`);

console.log();
console.log(`============================`);
console.log();


/*
5. Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array, passando uma função arrow como parâmetro.
5.1 Escreva um teste com o array [8, 3, 9, 5, 6, 12]
*/
console.log(`Atividade 5: Mostrar os números pares de uma lista usando o método filter()\n\n`);
export const outrosNumeros = [8, 3, 9, 5, 6, 12];

console.log(`Lista original: ${outrosNumeros}\n`);
export const numPares = outrosNumeros.filter((element) => element % 2 == 0);

console.log(`Apenas os números pares da lista: ${numPares}`);

console.log();
console.log(`============================`);
console.log();


/*
6. Faça um programa TypeScript:
6.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X). Crie classes com nomes que representem algo significativo.
6.2 As classes devem possuir atributos diferentes. 
6.3 A interface deve possuir pelo menos um método. 
6.4 A implementação desse método nas classes deve utilizar os atributos.
6.5 Escreve um teste que instancie as classes criadas, altera os atributos e teste o método comum na interface.
*/

console.log(`Atividade 6:
Criar classes com uma interface em comum;
Cada classe deve ter atributos diferentes;
A interface deve possuir ao menos um método;
O método comum deve usar os atributos;
Escrever um teste para instanciar as classes, alterar seus atributos e utilizar o método da interface.\n\n`);
export interface Forma2D {
  area(): number;
}

export class Retangulo implements Forma2D {
  comprimento: number;
  largura: number;

  constructor(comprimento: number, largura: number) {
    this.comprimento = comprimento;
    this.largura = largura;
  }

  area(): number {
    return this.comprimento * this.largura;
  }

}
export class Triangulo implements Forma2D {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  area(): number {
    return this.base * this.altura / 2;
  }
}

export const retExemplo = new Retangulo(3, 4);
export const triExemplo = new Triangulo(6, 8);

console.log(`Instanciando classes:
export const retExemplo = new Retangulo(comprimento: 3, largura: 4);
export const triExemplo = new Triangulo(base: 6, altura: 8);\n`)
console.log(`Utlizando o método nesses estados iniciais:
Retângulo: ${retExemplo.area()}
Triângulo: ${triExemplo.area()}\n`)
console.log(`Alterando atributos:
retExemplo.comprimento = 8;
triExemplo.base = 12;\n`)
retExemplo.comprimento = 8;
triExemplo.base = 12;

console.log(`Verificando as novas áreas:
Retângulo: ${retExemplo.area()}
Triângulo: ${triExemplo.area()}`);
