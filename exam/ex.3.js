function numbers(input){
let arrayOfNumbers = input.split(" ");
let sum = 0;
let count = 0;
let newArr = [];

for(let i = 0 ; i < arrayOfNumbers.length ; i++){
    let num = Number(arrayOfNumbers[i]);
    sum += num;
}
let average = sum / (arrayOfNumbers.length);
if (arrayOfNumbers.length === 1){
    console.log("No");
    return;
}

for (let j = arrayOfNumbers.length - 1 ; j >= 0 ; j--){
    
    if (count >= 5){
        break;
    }
    let checkNum = Number(arrayOfNumbers[j]);
    if (checkNum > average){
    newArr.push(checkNum);
    count++;
    }
    
}
newArr.sort((a ,b) => b - a);
if (newArr.length == 0){
    console.log("No");
    return;
}
console.log(newArr.join(" "));
}
numbers('-1 -2 -3 -4 -5 -6');
