function maxElement(arr){

    let sequence = 1;
    let maxSequance = 0;
    let maxSequanceNum = 0;

    for (let index = 0; index < arr.length; index++) {
    
        
        if (index !== 0){
            let currentNum = Number(arr[index]);
            let prevNum = Number(arr[index - 1]);
if (currentNum === prevNum){
    sequence++;
}
else {
    sequence = 1;
}
if (sequence > maxSequance){
    maxSequance = sequence;
    maxSequanceNum = currentNum;
}

        }
    }

console.log(`${(maxSequanceNum + " ").repeat(maxSequance)}`);

}
maxElement([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])