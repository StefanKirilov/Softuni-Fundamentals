function pirates(arr){
    let target = [];
    let line = arr.shift();
    let isItTrue = false;

    while(line !== 'Sail'){

        let tokens = line.split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        for (let i = 0 ; i < target.length ; i++){
            let currentCity = target[i];
        if ((currentCity.city === city)){
            currentCity.population += population;
            currentCity.gold += gold;
            isItTrue = true;
        }
    }
    if (isItTrue === false){

        target.push({
            city,
            population,
            gold
        });
    };

        line = arr.shift();
    }
    line = arr.shift();
    while(line !== 'End'){
        let token = line.split("=>");
        let command = token[0];
        let city;
        let gold;
        let population;
        switch (command){
            case "Prosper":
                city = token[1];
                gold = Number(token[2]);
                if (gold < 0){
                    console.log("Gold added cannot be a negative number!");
                    break;
                }
                else{
                    for (let i = 0 ; i < target.length ; i++){
                        let currentCity = target[i];
                    if ((currentCity.city === city)){
                        currentCity.gold += gold;
                        console.log(`${gold} gold added to the city treasury. ${city} now has ${currentCity.gold} gold.`);
                    }
                }
            }
                break;
                case "Plunder":
                    city = token[1];
                    population = Number(token[2]);
                    gold = Number(token[3]);
                    for (let i = 0 ; i < target.length ; i++){
                        let currentCity = target[i];
                    if ((currentCity.city === city)){
                        currentCity.population -= population;
                        currentCity.gold -= gold;
                        console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                
                    }
                    if (currentCity.population <= 0 || currentCity.gold <= 0){   
                        console.log(`${city} has been wiped off the map!`);
                        target.splice(i,1);
                    }
                }
                    

                    break;
        }
        line = arr.shift();

    }
    let buff = `Ahoy, Captain! There are ${target.length} wealthy settlements to go to:\n`
    if (target.length > 0){
        for (let obj of target){
            
            buff += `${obj.city} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg\n`
        }
        console.log(buff);
    }
    else{
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");

    }

}
pirates(["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"])