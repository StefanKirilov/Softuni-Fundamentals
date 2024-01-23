function blackFlag (arr){

    let days = Number(arr.shift());
    let plunderDay = Number(arr.shift());
    let target = Number(arr.shift());

    let countDays = 0;
    let allPlunder = 0;

    for (let i = 0 ; i < days ; i++){
        countDays++

        allPlunder += plunderDay;

        if (countDays % 3 === 0){
            allPlunder += (plunderDay/2);
        }

        if (countDays % 5 === 0) {
            allPlunder = allPlunder - (0.3 * allPlunder);
        }

        
    }

    if (allPlunder >= target){
        console.log(`Ahoy! ${allPlunder.toFixed(2)} plunder gained.`);
    }
    else {
        let perc = (allPlunder/target)*100;
        console.log(`Collected only ${perc.toFixed(2)}% of the plunder.`);
    }

}
blackFlag(["10",
"20",
"380"])
