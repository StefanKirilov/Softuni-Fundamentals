function postOffice (arr){

    let [first , second , third] = arr[0].split('|');

    let firstRegex = /([#$&%])(?<word>[A-Z]+)\1/g;

    let secondRegex = /(?<code>[0-9]{2}):(?<length>[0-9]{2})/g;

    let thirdRegex = /(?<firstLetter>[A-Z])(?<lowLetter>[a-z]+)/g

    let found = first.match(firstRegex);

    let letters = found.toString();
    let allLettersCode = [];

    

    for (const ch of letters) { 
        
        let chCode = ch.charCodeAt(0);
        if (chCode < 65 || chCode > 90){
            continue;
        }

        allLettersCode.push(chCode);  
        
    }
    let includesLength = [];
      let  includesCode = [];

    let matches = second.matchAll(secondRegex);

    for (let match of matches) {
        let code = Number(match.groups["code"]);
        let length = Number(match.groups["length"]);

            if (allLettersCode.includes(code)){
                includesCode.push(code);  
                includesLength.push(length);
        }   
    }
   
    
    let finalMatches = third.matchAll(thirdRegex);
    let finalWords = [];

    for (let match of finalMatches) {
        let firstLetter = match.groups["firstLetter"];
        let secondLetters = match.groups["lowLetter"];

        if (letters.includes(firstLetter)){

            let index = letters.indexOf(firstLetter);
            
            if (secondLetters.length === includesLength[index - 1]){
                finalWords.push(match[0]);
            }
            
        }

    }

for (const word of finalWords) {
    console.log(word);
}

}
postOffice([
  'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'
])