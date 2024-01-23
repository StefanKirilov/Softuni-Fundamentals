function mirrorWords(input){

let regex = /([@|#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
let count = 0;
let result = [];

for (let text of input) {
    let matches = text.matchAll(regex);
    for (const match of matches) {
        count++;
        let leftWord = match.groups["first"];
        let rigthWord = match.groups["second"];
        let reversedLeftWord = leftWord.split("").reverse().join("");
        if (rigthWord === reversedLeftWord){
            result.push(`${leftWord} <=> ${rigthWord}`)

        }
    }
}
if (count === 0){
    console.log("No word pairs found!");
}
else {
    console.log(`${count} word pairs found!`);
}
if (result.length === 0){
    console.log("No mirror words!");
}
else{
    console.log(`The mirror words are:\n${result.join(", ")}`)
}

}
mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);