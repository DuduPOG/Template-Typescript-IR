import { describe, it, expect } from 'vitest';
import { strings, formatado } from './code.ts';


it('Teste para concatenar strings de um array usando o método join()', () => {
  const concatenados = strings.join(' '); // strings = ['Arrays', 'com', 'TypeScript'];
  expect(concatenados).toEqual(formatado);
});


