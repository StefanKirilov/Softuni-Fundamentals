function sorting(arr) {

    let sortArr = arr.sort((a, b) => b - a);
    let result = [];
    for (let i = 0 ; i < sortArr.length / 2; i++){
result.push(sortArr[i]);

        if (sortArr.length % 2 === 1 && !((sortArr.length - 1) / 2) === i){
            result.push(sortArr[sortArr.length - 1 - i]);
        }
        else if ( sortArr.length % 2 === 0){
            result.push(sortArr[sortArr.length - 1 - i]);
        }
 
    }
    console.log(result.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])