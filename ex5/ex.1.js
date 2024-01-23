function train(input){
let wagons = input.shift().split(" ").map(Number);
let maxCapacity = Number(input.shift());


for (let i = 0; i < input.length ; i++){

let command = input[i].split(" ");
if (command[0] === "Add") {
    wagons.push(Number(command[1]));
}
else {
    let passagers = Number(command[0]);
    for ( let j = 0 ; j < wagons.length ; j++){
        let sum = wagons[j] + passagers;
        if (sum <= maxCapacity){
            wagons[j] += passagers;
            break;
        }
    }
}

    
}

return wagons.join(" ");


}
train (['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])