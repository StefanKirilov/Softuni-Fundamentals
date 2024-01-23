function sumDigits (num) {
let numToString = String(num);
let sum = 0;

for (i = 0 ; i < numToString.length ; i++){
let number = Number(numToString[i]);
sum += number;
}
return sum;
}
console.log(sumDigits(245678));