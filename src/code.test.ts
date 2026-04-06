import { describe, it, expect } from 'vitest';
import { cortados, numeros } from './code.ts';

//describe('', () => {
  // array de referência: [2, 4, 6, 2, 8, 9, 5]
  it('Mostrar apenas os dois primeiros elementos de um array usando o método slice()', () => {
    const sliced = [2, 4];
    expect(sliced).toEqual(cortados);
  });
//});


