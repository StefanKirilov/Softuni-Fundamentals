function houseParty (arr){
   let newArr =[];
   for (el of arr){
    let commands = el.split(" is ");
    let name = commands[0];
    let command = commands[1];
    if (command === "going!") {
if (newArr.indexOf(name) === -1){
    newArr.push(name);
}
else {
    console.log(`${name} is already in the list!`);
}
    }
    else {
if (newArr.indexOf(name) === -1){
    console.log(`${name} is not in the list!`);
}
else{
    newArr.splice(newArr.indexOf(name), 1);
}
    }
   }

console.log(newArr.join("\n"));

}

houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']);