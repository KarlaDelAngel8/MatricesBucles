/**
 * Número dividido en mitades
 

Dado un número, devuelve el número dividido en sus mitades en una matriz.
 

Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` .
 
 */

const n = 4;
const n2 = 10;
function numDiv(num){
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;
}
function numDiv2(num2){
    let res2 = [];
    const half = num2 / 2;
    res2.push(half);
    res2.push(half);
    return res2;
}
console.log("NUMERO DIVIDIDO EN MITADES");
console.log(numDiv2(n));
console.log(numDiv(n2));
