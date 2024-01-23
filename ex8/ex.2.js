function modernTimes(text){

    let textArr = text.split(" ");

    for (const word of textArr) {
        if (word.startsWith("#") && word.length > 1){
            let isSpecial = true;
            let printWord = word.substring(1 , word.length)
            let printWordArr = printWord.split("");
            for (let ch of printWordArr) {
                ch = ch.toLowerCase();
                if(ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122){
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial){
            console.log(printWordArr.join(""));
            }
        }
    }

}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')