function wordsTracker (input){

    let map = new Map();

    let checkWords = input.shift().split(" ");

    checkWords.forEach(word => {
        map.set(word,0);
    });

    for (const word of input) {
        for (const checkWord of checkWords) {
            if(word === checkWord){
                let quantity = map.get(checkWord);
                map.set(checkWord , quantity + 1);
            }
        }
    }

    let sortedWord = Array.from(map).sort((a,b) => b[1] - a[1]);

    for (const element of sortedWord) {
        console.log(`${element[0]} - ${element[1]}`);
    }




}
wordsTracker([
'this sentence',
'In', 'this', 'sentence', 'you', 'have',
'to', 'count', 'the', 'occurrences', 'of',
'the', 'words', 'this', 'and', 'sentence',
'because', 'this', 'is', 'your', 'task'
]);