function needForSpeed (arr){
    let number = Number(arr.shift());
    let allCars = [];

    for (let i = 0 ; i < number ; i++){
        let tokens = arr.shift().split("|");

        let car = tokens[0];
        let mileage = Number(tokens[1]);
        let fuel = Number(tokens[2]);
        allCars.push({
            car,
            mileage,
            fuel
        });
    }
    for (let i = 0; i < arr.length ; i++){
        let line = arr[i];
        if (line === 'Stop'){
            break;
        }
        let tokens = line.split(' : ');
        let command = tokens[0];
        let checkedCar = tokens[1];
        let distance
        let spentFuel
        switch (command) {
            case 'Drive' :  
                distance = Number(tokens[2]);
                spentFuel = Number(tokens[3]);
                for (let x = 0; x < allCars.length; x++){
                    let currentCar = allCars[x];
                    if (currentCar.car === checkedCar){
                        if (currentCar.fuel - spentFuel < 0){
                            console.log("Not enough fuel to make that ride");
                            break;
                        }
                        else{
                        currentCar.mileage += distance;
                        currentCar.fuel -= spentFuel;
                        console.log(`${checkedCar} driven for ${distance} kilometers. ${spentFuel} liters of fuel consumed.`);
                        if (currentCar.mileage >= 100000){
                            console.log(`Time to sell the ${checkedCar}!`);
                            allCars.splice(x,1);
                        }
                        }
                    }
                }

                break;
                case 'Refuel' :
                    let refillFuel = Number(tokens[2]);
                    for (let x = 0; x < allCars.length; x++){
                        let currentCar = allCars[x];
                        if (checkedCar===currentCar.car){
                            oldFuel = currentCar.fuel;
                            currentCar.fuel += refillFuel;
                            if(currentCar.fuel > 75){
                                currentCar.fuel = 75;
                                refillFuel = 75 - oldFuel;
                            }
                            console.log(`${checkedCar} refueled with ${refillFuel} liters`);
                        }
                    }

                    
                    break;
                    case 'Revert' :
                        distance = Number(tokens[2]);
                        for (let x = 0; x < allCars.length; x++){
                            let currentCar = allCars[x];
                            if (checkedCar === currentCar.car){
                                currentCar.mileage -= distance;
                                if (currentCar.mileage < 10000){
                                    currentCar.mileage = 10000
                                    break;
                                }
                                console.log(`${checkedCar} mileage decreased by ${distance} kilometers`);
                            }

                        }
                        break;
        }
    }

    for (const obj of allCars) {
        console.log(`${obj.car} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`);
    }


}
needForSpeed ([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
   ]
   );