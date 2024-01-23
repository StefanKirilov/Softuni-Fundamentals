function bomb(arr , specArr){

let bombNumber =  arr.map(Number);
let specialNum = Number(specArr[0]);
let power = Number(specArr[1]);

for (let i = 0 ; i < bombNumber.length ; i++){

    let checkNumber = bombNumber[i];
    if (checkNumber === specialNum){
        
        let startIndex = arr.indexOf(checkNumber) - power;
        let stopIndex = (2*power)+1;
        bombNumber.splice(startIndex , stopIndex);
        i = 0;
    }
}

let sum = bombNumber.reduce((a , b) => a + b , 0);
console.log(sum);

}
bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);