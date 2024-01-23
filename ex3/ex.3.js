function mergeArr (arr1 , arr2){
let newArr = [];
let newNumber = 0;
for (i = 0 ; i < arr1.length ; i++){
    if (i % 2 !== 0){
        newNumber = arr1[i] + arr2[i];

    }
    else {
    newNumber = Number(arr1[i]) + Number(arr2[i]);
    }
    newArr.push(newNumber);
}

return newArr.join(" - ");

}
console.log(mergeArr(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']))