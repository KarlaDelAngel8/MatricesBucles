/**
 * Suma de resistencias en serie
 

Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)
 */
let total =0 ; 
let total2 =0 ;
let total3 =0 ;
const sumResitance= [-1,5,-6,-3];
const sumResitance2= [14,3.5,6];
const sumResitance3= [8,15,100];

for (let i = 0; i <=3; i++){
    total +=Math.abs((sumResitance[i]))
}for (let j = 0; j <=2; j++){
     total2 +=(sumResitance2[j])
 }for (let j = 0; j <=2; j++){
    total3 +=(sumResitance3[j])
}
console.log("SUMA DE RESISTENCIAS EN SERIE");
console.log(total + " ohmios");
console.log(total2 + " ohmios");
console.log(total3 + " ohmios");