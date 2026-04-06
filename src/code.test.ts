import { describe, it, expect } from 'vitest';
import { listaAoQuadrado, listaAoQuadrado2, strings, formatado, objetos, cortados, numPares, Forma2D, Retangulo, Triangulo } from './code.ts';


// Atividade 1
describe('Testes para elevar elementos ao quadrado', () => {
  it('cada elemento do array elevado ao quadrado usando for tradicional', () => {
    const esperado = [9, 25, 49, 9, 64, 81, 1]; // quadrados de [3,5,7,3,8,9,1]
    expect(listaAoQuadrado).toEqual(esperado);
  });

  it('cada elemento do array elevado ao quadrado usando forEach', () => {
    const esperado = [9, 25, 49, 9, 64, 81, 1]; // quadrados de [3,5,7,3,8,9,1]
    expect(listaAoQuadrado2).toEqual(esperado);
  });
});


// Atividade 2
describe('Teste para concatenar strings de um array usando o método join()', () => {
  it('', () => {
  const concatenados = strings.join(' '); // strings = ['Arrays', 'com', 'TypeScript'];
  expect(concatenados).toEqual(formatado);
});
});


// Atividade 3
describe('Testes para ordenação de strings de forma decrescente usando o método sort()', () => {
  // lista original: ['carro', 'boneco', 'ave', 'lapis']
  it('Ordenando pela ordem alfabética reversa', () => {
    const alfaReversa = ['lapis', 'carro', 'boneco', 'ave'];
    expect(alfaReversa).toEqual(objetos.sort( (a, b) => b.localeCompare(a) ));
  });
  it('Ordenando pela ordem decrescente das strings', () => {
    const decrescente = ['boneco', 'lapis', 'carro', 'ave'];
    expect(decrescente).toEqual(objetos.sort( (a, b) => b.length - a.length ));
  });
});


// Atividade 4
describe('Mostrar apenas os dois primeiros elementos de um array usando o método slice()', () => {
  // array de referência: [2, 4, 6, 2, 8, 9, 5]
  it('', () => {
    const sliced = [2, 4];
    expect(sliced).toEqual(cortados);
  });
});


// Atividade 5
describe('Mostrar os números pares de uma lista usando o método filter()', () => {
  // array de referência: [8, 3, 9, 5, 6, 12]
  it('', () => {
    const pares = [8, 6, 12];
    expect(pares).toEqual(numPares);
  });
});


// Atividade 6
describe('Atividade 6: Classes com Interface Comum', () => {
  it('deve instanciar a classe Retangulo com atributos corretos', () => {
    const retangulo = new Retangulo(3, 4);
    expect(retangulo.comprimento).toBe(3);
    expect(retangulo.largura).toBe(4);
  });

  it('deve calcular a área do retângulo corretamente', () => {
    const retangulo = new Retangulo(3, 4);
    expect(retangulo.area()).toBe(12);
  });

  it('deve alterar os atributos do retângulo e calcular a nova área', () => {
    const retangulo = new Retangulo(3, 4);
    retangulo.comprimento = 8;
    retangulo.largura = 5;
    expect(retangulo.area()).toBe(40);
  });

  it('deve instanciar a classe Triangulo com atributos corretos', () => {
    const triangulo = new Triangulo(6, 8);
    expect(triangulo.base).toBe(6);
    expect(triangulo.altura).toBe(8);
  });

  it('deve calcular a área do triângulo corretamente', () => {
    const triangulo = new Triangulo(6, 8);
    expect(triangulo.area()).toBe(24);
  });

  it('deve alterar os atributos do triângulo e calcular a nova área', () => {
    const triangulo = new Triangulo(6, 8);
    triangulo.base = 12;
    triangulo.altura = 10;
    expect(triangulo.area()).toBe(60);
  });

  it('deve validar que Retangulo implementa Forma2D corretamente', () => {
    const retangulo: Forma2D = new Retangulo(3, 4);
    expect(retangulo.area()).toBe(12);
  });

  it('deve validar que Triangulo implementa Forma2D corretamente', () => {
    const triangulo: Forma2D = new Triangulo(6, 8);
    expect(triangulo.area()).toBe(24);
  });
});


