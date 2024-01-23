function needForSpeed (arr){

    let number = arr.shift();
    let catalog = [];

    for (let i = 0; i < number ; i++){
        let tokens = arr.shift().split('|');
        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fluel = Number(tokens[2]);

        catalog.push({
            car,
            mileage,
            fluel
        });

    }
    let line = arr.shift();
    while (line !== 'Stop'){
        let tokens = line.split(' : ');
        let command = tokens[0];
        let car = tokens[1];

        switch (command) {
            case 'Drive':
                let distance = Number(tokens[2]);
                let neededFluel = Number(tokens[3]);
                for (let i = 0; i<catalog.length; i++){
                    let currentCar = catalog[i];
                    if (currentCar.car === car){
                        if (currentCar.fluel < neededFluel){
                            console.log("Not enough fuel to make that ride");
                        }
                        else {
                            currentCar.mileage += distance;
                            currentCar.fluel -=neededFluel;
                            console.log(`${car} driven for ${distance} kilometers. ${neededFluel} liters of fuel consumed.`);
                        }
                        if (currentCar.mileage > 100000){
                            catalog.splice(i,1);
                            console.log(`Time to sell the ${car}!`);
                        }

                    }
                }
                break;
                case 'Refuel':
                    let fluel = Number(tokens[2]);
                    for (let i = 0; i<catalog.length; i++){
                        let currentCar = catalog[i];
                        if (currentCar.car === car){
                            let oldFluel = currentCar.fluel;
                            currentCar.fluel += fluel;
                            if(currentCar.fluel > 75){
                                currentCar.fluel = 75
                            }
                            let litters = currentCar.fluel - oldFluel;

                            console.log(`${car} refueled with ${litters} liters`);
                            
                        }
                    }
                break;
                case 'Revert':
                    let km = Number(tokens[2]);
                    for (let i = 0; i<catalog.length; i++){
                        let currentCar = catalog[i];
                        if (currentCar.car === car){
        
                            currentCar.mileage -= km
                            if (currentCar.mileage < 10000){
                                currentCar.mileage = 10000
                                break;
                            }
                            console.log(`${car} mileage decreased by ${km} kilometers`);
                        }
                        
                    }
                break;
        }


        line = arr.shift();
    }
    let buff = '';
    for (const car of catalog) {
        buff += `${car.car} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fluel} lt.\n`
        
    }
console.log(buff);

}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
   ])