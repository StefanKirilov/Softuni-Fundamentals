function equalSums(arr){

let leftSum = 0;
let rightSum = 0;
let isEqual = false;

for (i = 0 ; i < arr.length ; i++){
for (j = 0 ; j < arr.length; j++){

    if (i !== j){
        let num = Number(arr[j]);
    
   if (j < i){
    leftSum += num;
   }
   else if (j > i){
    rightSum += num;
   }
}
if (i === 0){
    leftSum = 0;
}
else if (i === arr.length - 1){
    rightSum = 0;
}
}
if (leftSum === rightSum){
    console.log(i);
    isEqual = true;
}
else {
    leftSum = 0;
    rightSum = 0;
}
}
if(!isEqual){
    console.log("no");
}


}
(equalSums([1, 2, 3, 3]));