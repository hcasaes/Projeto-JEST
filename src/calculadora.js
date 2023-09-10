class Calculadora {
  sum(a, b) {
      return a + b;
    }
    
    div(a, b) {
      if (b === 0) {
        throw new Error('Divisão por zero!');
      }
      return a / b;
    }

  sub(a, b) {
      return a - b;
    }

  mult(a, b) {
      return a * b;
    }
}
  
module.exports = Calculadora ;