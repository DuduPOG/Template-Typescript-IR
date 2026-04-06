import { describe, it, expect } from 'vitest';
import { objetos } from './code.ts';

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


