function winningTickets (input){

    let regex = /(?<symbol>[@#$^])/g;

    for (let i = 0 ; i < input.length ; i++){
        let text = input[i];
        if (text.length !== 20){
            console.log("invalid ticket");
            continue;
        }
        let symbol = '';
        let leftText = text.substring(0,text.length/2);
        let rigthText = text.substring(text.length/2);

        let resultLeft = leftText.match(regex);
        let resultRight = rigthText.match(regex);

        let leftLength = resultLeft.length;
        let rigthLength = resultRight.length;

        let have = false;
        for (let j = 0; j < text.length ; j++){
            let ch = text[j];
            
            if (ch === '$' || ch === '#' || ch === '@' || ch === '^'){
                have = true;
                break;
            }
        }
        if (have === false){
            console.log(`ticket "${text}" - no match`);
        }
        if (text.includes('@')){
            symbol = '@';
        }
        else if (text.includes('#')){
            symbol = '#';
        }
        else if (text.includes('^')){
            symbol = '^';
        }
        else if (text.includes('$')){
            symbol = '$';
        }
        
        
            if (leftLength >= 6 && leftLength < 10){
                console.log(`ticket "${text}" - ${leftLength}${symbol}`);
            }
            else if (leftLength === 10){
                console.log(`ticket "${text}" - ${leftLength}${symbol} Jackpot!`);
            }
        

        


    }


}
winningTickets(['$$$$$$$$$$$$$$$$$$$$'   ,   'aabb'  ,     'th@@@@@@eemo@@@@@@ey']);