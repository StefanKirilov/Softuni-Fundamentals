function delivery(arr){
    let neighborhood = arr.shift().split("@");
    let nextLine = arr.shift().split(" ");
    let command = nextLine[0];
    let jumps = Number(nextLine[1]);
    let zeroCount = 0;
    

    while (command !== "Love!"){
        if (jumps >= neighborhood.length){
            jumps = 0;
            continue;
        }

        if (neighborhood[jumps] === 0){
            console.log(`Place ${jumps} already had Valentine's day.`);
            nextLine = arr.shift().split(" ");
            command = nextLine[0];
            if (command === "Love!"){
                return;
            }
            jumps += Number(nextLine[1]);
            
            continue;
        }
       
        let afterJumoNumber = neighborhood[jumps] - 2;
        if (afterJumoNumber < 0){
            afterJumoNumber = 0;
        }
        
        neighborhood.splice(jumps , 1 , afterJumoNumber);

        if(afterJumoNumber === 0){
            console.log(`Place ${jumps} has Valentine's day.`);
            zeroCount++

        }

        nextLine = arr.shift().split(" ");
        command = nextLine[0];
        if (command === "Love!"){
            continue;
        }
        jumps += Number(nextLine[1]);
    
    }
    
    console.log(`Cupid's last position was ${jumps}.`);

    if (zeroCount < neighborhood.length){
        console.log(`Cupid has failed ${((neighborhood.length) - zeroCount)} places.`);
    }
    else {
        console.log("Mission was successful.");
    }

}
delivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
;