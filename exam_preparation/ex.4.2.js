function emojiDirector(arr){
let regex = /([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/g;
let numbers =/(?<num>[0-9])/g
let text = arr[0];
let count = 0;
let num = text.matchAll(numbers);
let arrNum = [];
let validWord = [];

for (const number of num) {
    
for (i = 1; i < number.length ; i++) {
arrNum.push(Number(number[i]));
}
}
let coolSum = arrNum.reduce((accumulator , currenValue) => accumulator * currenValue);
let results = text.matchAll(regex);

for (const match of results) {
    count++;
    let word = match.groups['word'];
    let sum = 0;
    for (let i = 0; i < word.length ; i++){
        let ch = word[i];
        let pointCh = ch.charCodeAt();
        sum += pointCh;
    }
    if (sum > coolSum){
        validWord.push(match[0]);
    };
}
let buff = '';
for (let i = 0; i < validWord.length ; i++) {
    buff += `${validWord[i]}\n`
}

console.log(`Cool threshold: ${coolSum}`);
console.log(`${count} emojis found in the text. The cool ones are:`);
console.log(buff);


}
emojiDirector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);