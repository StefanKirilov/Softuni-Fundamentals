function arrayRotation(arr , num){


    for (i = 0; i < num ; i++){
let firstElement = arr[0];
arr.shift(firstElement);
arr.push(firstElement);
    }
return arr.join(" ");
}
console.log(arrayRotation([51, 47, 32, 61, 21], 2 ))