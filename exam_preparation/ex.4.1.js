function activationKeys (arr){
let key = arr.shift();

for (i = 0 ; i < arr.length ; i++){
    let line = arr[i];
    if (line === "Generate"){
        break;
    }
    let token = line.split('>>>');
    let command = token[0];
    if (command === 'Slice'){
        let startIndex = Number(token[1]);
        let endIndex = Number(token[2]);
        let substr = key.substring(startIndex, endIndex );
        key = key.replace(substr,'');
        console.log(key);
    }
    else if (command === 'Flip'){
        let uppOrLower = token[1];
        let startIndex = Number(token[2]);
        let endIndex = Number(token[3]);
        let substr = key.substring(startIndex, endIndex );
        if (uppOrLower === 'Upper'){
            let toUpper = substr.toUpperCase();
            key = key.replace(substr,toUpper);
            console.log(key);
        }
        else{
            let toLower = substr.toLowerCase();
            key = key.replace(substr,toLower);
            console.log(key);
        }
    }
    else if (command === 'Contains'){
        let substring = token[1];
        if (key.includes(substring)){
            console.log(`${key} contains ${substring}`);
        }
        else{
            console.log("Substring not found!");
        }
    }
}

console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",

"Slice>>>2>>>6",

"Flip>>>Upper>>>3>>>14",

"Flip>>>Lower>>>5>>>7",

"Contains>>>def",

"Contains>>>deF",

"Generate"]);