import { describe, it, expect } from 'vitest';
import { lista, listaAoQuadrado, listaAoQuadrado2 } from './code.ts';

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