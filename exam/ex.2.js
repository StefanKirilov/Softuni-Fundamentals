function treasureHunt(input){

let chest = input.shift().split('|');
let command = input.shift();
let sum = 0;

while(command !== "Yohoho!"){
    let token = command.split(" ");
    let action = token.shift();

    if (action === "Loot"){
        
        for (let el of token){
    
        if (chest.includes(el)){
            continue;
        }
        chest.unshift(el);
    }
}
if (action === "Drop"){
    let index = Number(token[0]);
    if (index < 0  || index > chest.length - 1) {
        command = input.shift();
        continue;
    }
    
    let el = chest.splice(index , 1);
    chest.push(el);
}
if (action === "Steal"){
    let count = Number(token[0]);
    
    let removedEl = chest.splice(-count);
    console.log(removedEl.join(", "));

}
command = input.shift();

}
if (chest.length === 0){
    console.log("Failed treasure hunt.");
    return;
}
for (let i = 0 ; i < chest.length ; i++){
    let checkItem = chest[i].length;
    sum += checkItem;
}
let average = sum / chest.length;

console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);

}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"]);