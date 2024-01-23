function secretChat(input){
    let text = input.shift();

    for(let i = 0 ; i < input.length ; i++){
        let line = input[i].split(":|:");
        if(line === "Reveal"){
            break;
        }
        let command = line.shift();

        if (command === "InsertSpace"){
            let index = line.shift();
            let left = text.substring(0 , index);
            let rigth = text.substring(index);
            text = left + " " + rigth;
            
            console.log(text);
        }
        else if (command === "Reverse"){
            let string = line.shift();
            if(text.includes(string)){
                text = text.replace(string , "");
                let reversedString = string.split("").reverse().join("");
                text += reversedString;
                
                console.log(text);
            }
            else {
                console.log("error");
            }

        }
        else if (command === "ChangeAll"){
            let string = line.shift();
            let replaceString = line.shift();

           while (text.includes(string)) {  
                    text = text.replace(string , replaceString);
                
            }
            console.log(text);

        }


        line = input[i].split(":|:");

    }

    console.log(`You have a new text message: ${text}`);


}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])