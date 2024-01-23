function pirates(arr){
    let line = arr.shift();
    let catalog = [];

    while (line !== "Sail") {

        let tokens = line.split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        let have = false;

        
        for (let i = 0 ; i < catalog.length ; i++){
            let currentCity = catalog[i];
            if (currentCity.city === city){
                currentCity.population += population;
                currentCity.gold += gold;
                have = true;
            }
        }
            if (have === false){
                catalog.push({
                    city,
                    population,
                    gold
                });
            }
        

        line = arr.shift();
    }

    line = arr.shift();

    while (line !== 'End'){
        let tokens = line.split('=>');
        let command = tokens[0];
        let city = tokens[1];

        switch(command) {
            case 'Plunder':
                let killPeople = Number(tokens[2]);
                let stolenGold = Number(tokens[3]);
                for (let i = 0 ; i < catalog.length ; i++){
                    let currentCity = catalog[i];
                    if (currentCity.city === city){
                        currentCity.population -= killPeople;
                        currentCity.gold -= stolenGold;
                        console.log(`${city} plundered! ${stolenGold} gold stolen, ${killPeople} citizens killed.`);
                        if (currentCity.population <= 0 || currentCity.gold <=0){
                            console.log(`${city} has been wiped off the map!`);
                            catalog.splice(i,1);
                        };
                    };

                };
                break;
                case 'Prosper':
                    let givenGold = Number(tokens[2]);
                    if (givenGold <= 0 ){
                        console.log('Gold added cannot be a negative number!');
                    }
                    else {
                        for (let i = 0 ; i < catalog.length ; i++){
                            let currentCity = catalog[i];
                            if (currentCity.city === city){
                                currentCity.gold += givenGold;
                                console.log(`${givenGold} gold added to the city treasury. ${city} now has ${currentCity.gold} gold.`);
                            };
        
                        };
                    }
                    break;
        }

        line = arr.shift();
    }

    let buff = `Ahoy, Captain! There are ${catalog.length} wealthy settlements to go to:\n`

    if (catalog.length > 0){

    for (let city of catalog) {
        buff += `${city.city} -> Population: ${city.population} citizens, Gold: ${city.gold} kg\n`
    }
    console.log(buff);
}
else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
}

   
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])