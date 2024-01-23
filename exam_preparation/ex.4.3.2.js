function plants(arr){
    let num = Number(arr.shift());

    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    }

    let catalog = {};
    
    for (let i = 0; i < num ; i++){
    let token = arr.shift().split('<->');
    let name = token[0];
    let rarity = Number(token[1]);
    
    catalog[name] = {
        rarity: rarity,
        rating: [],
        avgRating: 0
    };
}


while (arr[0] !== 'Exhibition'){
    let [command , params] = arr.shift().split(': ');
    let action = actions[command];
    action(params);
}

let sorted = Object.entries(catalog).sort(comaprePlants);


function comaprePlants (a , b) {
    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;

    let ratingA = a[1].rating;
    let ratingB = b[1].rating;

    return rarityB - rarityA || (ratingB - ratingA) ;
}


function rate(line){
    let [name , rating] = line.split(' - ');
    if(catalog[name] !== undefined){
        let plant = catalog[name];
        plant.rating.push(Number(rating));

        let total = 0;
        for (let rating of plant.rating) {
            total += rating;
        }
        plant.avgRating = total / plant.rating.length;

    }
    else{
        console.log('error');
    }

}

function update(line) {
    let [name , rarity] = line.split(' - ');
    if(catalog[name] !== undefined){
        let plant = catalog[name];
        plant.rarity = rarity;
    }
    else{
        console.log('error');
    }
}

function reset (line){
    let name = line;
    if(catalog[name] !== undefined){
        let plant = catalog[name];
        plant.rating.length = 0;
        plant.avgRating = 0;
    }
    else{
        console.log('error');
    }
}

let buff = `Plants for the exhibition:\n`;
    for (const [name, plant] of sorted) {
        buff += `- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}\n`
        
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