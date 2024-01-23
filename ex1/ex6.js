function printAndSum (start , end){
    let sum = 0;
    let a = "";
    for (let i = start ; i <= end ; i++ ){
        sum = i + sum;
        a +=`${i} `;
    }
    console.log(a);
    console.log (`Sum: ${sum}`);

}
printAndSum(5 , 10)