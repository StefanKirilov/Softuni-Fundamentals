function substring(word , text){

    let newWord = word.toLowerCase();
    let textArray = text.split(" ");
    let isTrue = false;
    for (let textWord of textArray) {
        textWord = textWord.toLowerCase();
        if (newWord === textWord){
            console.log(word);
            isTrue = true;
        }
       
    }
    if (isTrue === false){
        console.log(`${word} not found!`);
    }
    

}
substring('javascript',
'JavaScript is the best programming language')