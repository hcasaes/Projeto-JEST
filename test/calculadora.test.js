const Calculadora = require('../src/calculadora'); 

describe('Calculadora', () => {
    let calculadora;
    
    beforeEach(() => {
        calculadora = new Calculadora();
      }); 

    test('Verificar se a soma retorna  valores positivos.', () => {
        expect(calculadora.sum(2, 2)).toBe(4);
    });

    test('Verificar se a soma retorna valores negativos.', () => {
        expect(calculadora.sum(-2, -2)).toBe(-4);
    });

    test('Verificar se a subtracao retorna valores positivos.', () => { 
        expect(calculadora.sub(8, 7)).toBe(1);
    });

    test('Verificar se a divisão retorna valores positivos.', () => { 
        expect(calculadora.div(8, 1)).toBe(8);
        expect(calculadora.div(8, 2)).toBe(4);
    });

    test('Verificar se a multiplicacao retorna valores positivos.', () => { 
        expect(calculadora.mult(8, 7)).toBe(56);
    });
});
