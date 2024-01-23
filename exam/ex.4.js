function reception(arr){

    let firstEmployee = Number(arr.shift());
    let secondEmployee = Number(arr.shift());
    let threeEmployee = Number(arr.shift());

    let students = Number(arr.shift());
    
    let allEmployeeForHour = firstEmployee + secondEmployee + threeEmployee;
    let hours = 0;

    while (students > 0){

    

        students -= allEmployeeForHour;

        hours++

        if (hours % 4 === 0){
            hours++
            continue;
        }

    }

    
    console.log(`Time needed: ${hours}h.`);


}
reception(['3','2','5','40']);