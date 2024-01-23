function oddOccurrences(input){

    let wordsToLowerCase = input.toLowerCase().split(" ");

    let obj = {};

    wordsToLowerCase.forEach(word => {
        obj[word] = 0;
        for (const checkWord of wordsToLowerCase) {
            if (word === checkWord) {
                let quantity = obj[word]
                obj[word] = quantity + 1;
            }
        }   
    });

    let arrOfObj = Object.entries(obj).filter(double => double[1] % 2 !== 0).sort((a,b)=> b[1]-a[1]);

   let result ="";

   for (const line of arrOfObj) {
    result += ` ${line[0]}`;
   }
   console.log(result);



}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');