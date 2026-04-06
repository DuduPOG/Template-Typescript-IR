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

const retExemplo = new Retangulo(3, 4);
const triExemplo = new Triangulo(6, 8);

console.log(`Instanciando classes:
const retExemplo = new Retangulo(comprimento: 3, largura: 4);
const triExemplo = new Triangulo(base: 6, altura: 8);\n`)
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
