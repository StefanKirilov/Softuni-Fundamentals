function oddOrEven (input){

    let num = String(input);
    let sumEven = 0;
    let sumOdd = 0;
    let number = "";
    for (i = 0; i < num.length ; i++){
    number = Number(num.charAt(i));

    if (number%2 === 0) {
sumEven += number
    }
    else{
sumOdd += number;
    }
    }
   
   
let final = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`

return final;
   
}

console.log(oddOrEven(1000435));