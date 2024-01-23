function encryptingPassword (arr){
    let num = Number(arr.shift());

    let regex2 = /(?<first>[^.]+)([>])(?<num>[0-9]+)\|(?<low>[a-z]*)\|(?<up>[A-Z]*)\|(?:(?!<>)*)(?<symbol>[^.]+)(?:(?!<>)*)<\k<first>/
    let regex1 = /(?<first>[^.]+)([>])(?<num>[0-9]+)\|(?<low>[a-z]*)\|(?<up>[A-Z]*)\|(?<symbol>[^.]+)<\k<first>/
    let regex = /(?<first>[^.]+)([>])(?<num>[0-9]+)\|(?<low>[a-z]*)\|(?<up>[A-Z]*)\|(?<symbol>[^.]+)(?<second>[^.]+)/

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

            // let second = match.groups['second'];
            // let firstLength = Number(first.length);
            // let secondLength = Number(second.length);
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