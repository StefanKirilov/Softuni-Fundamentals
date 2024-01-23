function searchNum (firstArr , secondArr){
   

    let arr = [];
    let takeNumbers = Number(secondArr[0]);
    let deleteNumbers = Number(secondArr[1]);
    let searchNumber = Number(secondArr[2]);

    let newArr = firstArr.splice(0 , takeNumbers).map(Number);
    arr = newArr.slice(deleteNumbers).map(Number);
    let result = arr.filter( x => x === searchNumber);


    let count = result.length
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}

searchNum([7, 1, 5, 8, 2, 7],[3, 1, 5]);