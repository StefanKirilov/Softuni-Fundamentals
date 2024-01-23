function unique(arr , num){

    for ( i = 0 ; i < arr.length ; i++){
let firstNum = Number(arr[i]); 

        for ( j = 1 + i ; j < arr.length ; j++) {
let secondNum = Number(arr[j]);
let sum = firstNum + secondNum;
if (sum === num){
    console.log(`${firstNum} ${secondNum}`);
}


        }
    }


}
unique([1, 7, 6, 2, 19, 23], 8)