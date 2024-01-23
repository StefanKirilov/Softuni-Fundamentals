function bigger(arr){

    let newArr = [];

    for (i = 0 ; i < arr.length ; i++){
        let firstNum = arr[i];
        let isMax = true;
        for(j = i+1; j < arr.length ; j++){
let secondNum = arr[j];
if (firstNum <= secondNum){
    isMax = false;
    break;
}

        }
        if (isMax){
            newArr.push(firstNum);
        }
    }
return newArr.join(" ");
}
console.log(bigger([1, 4, 3, 2]))