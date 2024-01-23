function words (words , text){

    let wordsArray = words.split(", ")
    

    for (const word of wordsArray) {
        let wordOfStars = "*".repeat(word.length);
        text = text.replace(wordOfStars , word);
    }

    console.log(text);
    

}
words('great, learning', 'softuni is ***** place for ******** new programming languages')