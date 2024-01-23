function password (arr){
    let text = arr.shift();

    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] === 'Done'){
            break;
        };
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command === 'TakeOdd'){
            let newText = '';
            for (let x = 0 ; x < text.length ; x++){

            if (x % 2 !== 0){
                newText += text[x];

            }
            }
            text = newText;
            console.log(text);
        }

        else if (command === 'Cut'){
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let substring = text.substring(index, index + length);
            let newText = text.replace(substring, '');
            text = newText;
            console.log(text);

        }
        else if (command === 'Substitute'){
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
password(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])