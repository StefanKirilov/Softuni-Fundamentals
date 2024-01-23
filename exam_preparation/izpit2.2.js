function encryptingPassword (arr){
    let num = Number(arr.shift());

   
    let regex1 = /(?<first>.+|\n+)([>])(?<num>[0-9]{3})\|(?<low>[a-z]{3})\|(?<up>[A-Z]{3})\|(?<symbol>.{3})<\k<first>/
   
    for (let i = 0; i < num ; i++){

        let text = arr[i];
        let match = text.match(regex1);
        let have = regex1.test(text);
        let textLength = Number(text.length);
        

        if(have){
            // let first = match.groups['first'];
            let first = match.groups['first'];
            let num = match.groups['num'];
            let low = match.groups['low'];
            let up = match.groups['up'];
            let symbol = match.groups['symbol'];
            let allMatch = first + num + low + up + symbol + first;
            let matchLength = Number(allMatch.length) + 5;
            let noSymbol = true;

            for (let j = 0; j < symbol.length ; j++){
                let ch = symbol[j];
                if(ch === '<' || ch === '>'){
                    noSymbol = false;
                }
            }
            if (noSymbol === false){
                console.log("Try another password!");
                continue;
            }
           

                if (textLength === matchLength){
                let result = num + low + up + symbol;
                console.log(`Password: ${result}`);
                }
            
            else{
                console.log("Try another password!");
            }
        }
        else{
            console.log("Try another password!");
        }

    }

}
encryptingPassword(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])