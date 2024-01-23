function passwordReset(arr){
let text = arr.shift();
let newPass = "";

for(let i = 0 ; i < arr.length ; i++){
    let line = arr[i];
    let tokens = line.split(" ");
    let command = tokens[0];
    if(command === "Done"){
        break;
    }
    else if (command === "TakeOdd"){
        for (let x = 0 ; x < text.length ; x++){
            if ((x + 1) % 2 === 0){
                newPass += text[x];
                
            }
            
        }
        text = newPass;
        console.log(text);
    }
    else if (command === "Cut"){
        let index = Number(tokens[1]);
        let length = Number(tokens[2]);
        let rigthText = newPass.substring(0,index);
        let leftText = newPass.substring(index + 3);
        text = rigthText + leftText;
        console.log(text);
    
    }
    else if (command === "Substitute"){
        let substring = tokens[1];
        let substitute = tokens[2];
        if (text.includes(substring)){

        
        text = text.replace(new RegExp (substring,'g'),substitute);
        console.log(text);
        
        }
        
        else{
            console.log("Nothing to replace!");
        }
    }
}

console.log(`Your password is: ${text}`);

}
passwordReset (["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);