/**
 * Matriz de múltiplos
 

Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` .
 */
const multiplos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
function arrayMultiplos (num1 , length) {
    for (let i = 1; i <= length; i++) {
      multiplos.push(num1 * i);
    }
    return multiplos; 
  }
  
 console.log((arrayMultiplos(2, 5)));
  
const multiples2 = [17, 34, 51, 68, 85, 102];
function arrayMultiplos2 (num2 , length) {
    for (let i = 1; i <= length; i++) {
      multiples2.push(num2 * i);
    }
    return multiples2;
  }
   
 console.log((arrayMultiplos2(17, 6)));