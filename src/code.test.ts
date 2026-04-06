import { describe, it, expect } from 'vitest';
import { Forma2D, Retangulo, Triangulo } from './code.ts';

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


