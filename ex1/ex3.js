function division (input){
let num = Number(input);
let number = "";
 if (num % 10 === 0 ){
    number = 10
 }
 else if (num % 7 === 0 ){
    number = 7
 }
 else if (num % 6 === 0 ){
    number = 6
 }
 else if (num % 3 === 0 ){
    number = 3
 }
 else if (num % 2 === 0 ){
    number = 2
 }
 
 if (typeof number === "number") {
    console.log (`The number is divisible by ${number}`);
 }
 else {
    console.log("Not divisible");
 }


}
division("30");