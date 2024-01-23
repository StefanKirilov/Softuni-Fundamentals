function plants(arr){
let num = Number(arr.shift());
let allPlants = [];

for (let i = 0; i < num ; i++){
let token = arr.shift().split('<->');
let plant = token[0];
let rarity = Number(token[1]);

allPlants.push({
    plant,
    rarity
});

};

for (let i = 0 ; i < arr.length ; i++){
    let line = arr[i];
    if (line === 'Exhibition'){
        break;
    }
    let [command , tokens] = line.split(': ');
    
    if (command === 'Rate'){
        let token = tokens.split(' - ');
        let searchPlant = token[0];
        let rating = Number(token[1]);
        let isItTrue = true;
        for(let x = 0; x < allPlants.length; x++){
            let currentPlant = allPlants[x];
            
            if (currentPlant.plant === searchPlant){
                if (currentPlant.hasOwnProperty('rating')){
                    let newRating = (currentPlant.rating + rating) / 2;
                currentPlant.rating = newRating;
                
            }
            else{
                currentPlant.rating = rating;
            }
            isItTrue = false;
            break;
        }
    }
    if (isItTrue === true){
        console.log("error");
    }
    }
    else if (command === 'Update'){
        let token = tokens.split(' - ');
        let searchPlant = token[0];
        let newRarity = Number(token[1]);
        for(let x = 0; x < allPlants.length; x++){
            let currentPlant = allPlants[x];
            if (currentPlant.plant === searchPlant){
                currentPlant.rarity = newRarity;
            }

    }
}
    else if (command === 'Reset'){
        let searchPlant = tokens;
        for(let x = 0; x < allPlants.length; x++){
            let currentPlant = allPlants[x];
            if (currentPlant.plant === searchPlant){
                currentPlant.rating = 0;
            }
    }
}
}

let buff = `Plants for the exhibition:\n`;
for (const plant of allPlants) {
    buff += `- ${plant.plant}; Rarity: ${plant.rarity}; Rating: ${plant.rating.toFixed(2)}\n`
    
}
console.log(buff);
}
plants(["3",

"Arnoldii<->4",

"Woodii<->7",

"Welwitschia<->2",

"Rate: Woodii - 10",

"Rate: Welwitschia - 7",

"Rate: Arnoldii - 3",

"Rate: Woodii - 5",

"Update: Woodii - 5",

"Reset: Arnoldii",

"Exhibition"]);