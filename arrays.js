//Suma de resistencias en serie
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





//Número dividido en mitades
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

//Sociedad secreta

const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const member3 = ['Harry', 'Ron', 'Hermione'];

function secretName(arr){
    let res = [];
    arr.forEach((e) => res.push(e.charAt(0)));
    return res.sort().join();
}
console.log(secretName(member1));
console.log(secretName(member2));
console.log(secretName(member3));

//Estado en linea 
const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];

function displayUsers(arr){
    const count = users.length;
    let res;
    if (count === 1){
        res = `${arr[0]} is online`;
    }else if(count === 2){
        res = `${arr[0]}, ${arr[1]}  are online`;
    }else{
        res= `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res;
}
console.log(displayUsers(users));

//matriz de multiplos
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

//Dominio positivo en Array
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


