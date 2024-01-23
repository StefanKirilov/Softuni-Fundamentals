function hogwards(arr) {
    let spell = arr.shift();

    for (let i = 0 ; i < arr.length ; i++){
        let line = arr[i];
        if( line === "Abracadabra"){
            break;
        }
        let have = false;
        let tokens = line.split(' ');
        let command = tokens[0];
        switch (command){
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                have = true;
                break;
                case 'Necromancy':
                    spell = spell.toLowerCase();
                    console.log(spell);
                    have = true;
                break;
                case 'Illusion':
                    let index = Number(tokens[1]);
                    let letter = tokens[2];
                    if (index < spell.length){
                        let searchLetter = spell[index];
                        spell = spell.replace(searchLetter,letter);
                        console.log('Done!');
                    }
                    else{
                        console.log("The spell was too weak.");
                    }
                    have = true;
                break;
                case 'Divination':
                    let firstStr = tokens[1];
                    let secondStr = tokens[2];
                    if (spell.includes(firstStr)){
                        spell = spell.replace(new RegExp (firstStr,'g'),secondStr);
                        console.log(spell);
                    }
                    have = true;
                break;
                case 'Alteration':
                    let substr = tokens[1];
                    let length = substr.length;
                    
                    if (spell.includes(substr)){
                        
                        spell = spell.replace(substr, '');

                        console.log(spell);

                    }
                    have = true;
                    
                break;
        }
        if (have === false){
            console.log("The spell did not work!");
        }
    }


}
hogwards(["SwordMaster",

"Target Target Target",

"Abjuration",

"Necromancy",

"Alteration master",

"Abracadabra"])