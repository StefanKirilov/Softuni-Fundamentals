function hardWords(data) {

    let text = data[0].split(" ");
    let words = data[1];
    let result = [];

    
        for (let searchingWord of text) {
            if (searchingWord.includes("_")){
                searchingLength = Number(searchingWord.length);
                
    
                for (let word of words) {
                    let wordLength = Number(word.length);
                    
                    if (wordLength === searchingLength){
                       
                        searchingWord = searchingWord.replace(searchingWord , word);
                        result.push(searchingWord);
                        break;
                    }
                    else{
                        continue;
                    }
                }
            }
            else {
                result.push(searchingWord);
            }
        
        
    }

    console.log(result.join(" "));




}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened.My dad bought me a sled.Mom started a new job as a __________.My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious.I hope this year Santa will _____ me a robot.',
 ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])