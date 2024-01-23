function game (arr){

    let text = arr.shift();

    for (let i = 0 ; i < arr.length ; i++){
        let line = arr[i];
        if (line === 'Decode'){
            break
        };
        let tokens = arr[i].split('|');
        let command = tokens[0];
        switch(command) {
            case 'ChangeAll' :
                let substring = tokens[1];
                let replacement = tokens[2];
                while(text.includes(substring)){
                    text = text.replace(substring , replacement);
                }
                break;
                case 'Insert' :
                    let index = Number(tokens[1]);
                    let value = tokens[2];
                    let leftString = text.substring(0,index);
                    let rightString = text.substring(index);
                    text = leftString + value + rightString;
                    break;
                    case 'Move' :
                        let num = Number(tokens[1]);
                        for (let x = 0; x < num ; x++){
                            let letter = text.substring(0,1);
                            let newText = text.substring(1);
                            text = newText + letter;

                        }
                    break;
        }
    }

console.log(`The decrypted message is: ${text}`);

}
game([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
   ])