import { describe, it, expect } from 'vitest';
import { numPares } from './code.ts';

//describe('', () => {
  // array de referência: [8, 3, 9, 5, 6, 12]
  it('Mostrar os números pares de uma lista usando o método filter()', () => {
    const pares = [8, 6, 12];
    expect(pares).toEqual(numPares);
  });
//});


