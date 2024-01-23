function perfectNumber(input){

    let number = Number(input);
    let sum = 0;
    for (let i = 1 ; i < number ; i++){
        let checkNum = number % i;
        if (checkNum === 0){
        sum += i;

        }
        
    }
    if (sum === number){
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }



}

perfectNumber(1236498);