function addAndSubstract (arr){
    newArr = [];
sum = 0;
newSum = 0;
    for(i = 0; i < arr.length ; i++){
let num = arr[i];
sum += num;
if (num % 2 === 0){
    num += i;
}
else {
    num -= i;
}
newSum += num;
newArr.push(num);
    }

console.log(newArr);
console.log(sum);
console.log(newSum);

}
addAndSubstract([5, 15, 23, 56, 35])