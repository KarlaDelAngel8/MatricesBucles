/**
 * Promedio antípoda
 

Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Divide cada número de la matriz resultante entre 2.
 

Ejemplo:
- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` .
 */
function matriz(num1, num2) {
    return num1 + num2;
}

function calculate(arr) {
    let mid = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);

    let resul = [];

    for (let j = 0; j < firstHalf.length; j++) {
        resul.push(matriz(firstHalf[j], secondHalf[secondHalf.length - 1 - j]));
    }

    for (let j = 0; j < resul.length; j++) {
        resul[j] /= 2;
    }

    return resul;
}
console.log(calculate([1,2,3,5,22,6]))
