function factorial(numA , numB){

let firstFactorial = calcFactorial(numA);
let secondFactorial = calcFactorial(numB);

console.log ((firstFactorial/secondFactorial).toFixed(2));

function calcFactorial (num){
let res = 1;
for (let i = num ; i > 1 ; i-=2 ){

res *= i * (i-1);
}
return res;
}
}
factorial(5,2);