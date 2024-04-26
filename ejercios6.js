/**
 * Dominio positivo en Array
 

Escribe una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
 

Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `falso` .
 */
function positiveDom(matriz) {
    let positivos = [-1, -3, -5, 4, 6767];
    for (let i = 0; i < matriz.length; i++) {
      for (let k = 0; k < matriz[i].length; k++) {
        if (matriz[i][k] > 0) {
          positivos++;
        }
      }
    }
    return positivos > (matriz.length * matriz[0].length) / 2;
  }
  console.log(positiveDom("false"));
  