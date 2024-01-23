function inventory(input){

    let res = [];

    for (let line of input){
        let [name , level , items] = line.split(" / ");
        let heroes = {
            name ,
            level ,
            items ,
        }
        res.push(heroes);
    }

    res.sort((heroesA , heroesB) => heroesA.level - heroesB.level);

    for (let obj of res){
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    }



}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )