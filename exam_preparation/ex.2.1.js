function game(input){
    let text = input.shift();

    for (let i = 0; i < input.length ; i++){
        let line = input[i];
        if(line === 'Decode'){
            break;
        }
        let tokens = line.split("|");
        let command = tokens[0];
        if (command === 'Move'){
            let n = Number(tokens[1]);
            for (let j = 0; j < n  ;j++){
                let first = text.substring(0,1);
                let anotherText = text.substring(1);
                text = anotherText + first;
            }
            

        }
        if (command === 'Insert'){
            let index = Number(tokens[1]);
            let letter = tokens[2];
            let leftText = text.substring(0,index);
            let rightText = text.substring(index);
            text = leftText + letter + rightText;

            
        }
        if (command === 'ChangeAll'){
            let firstLetter = tokens[1];
            let secondLetter = tokens[2];
            while(text.includes(firstLetter)){
                text = text.replace(firstLetter , secondLetter);
            }

            
        }



    }

console.log(`The decrypted message is: ${text}`);


}
game(['zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'])