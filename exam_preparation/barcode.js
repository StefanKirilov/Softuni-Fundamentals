function code (arr){
    let num = arr.shift();

    for (let i = 0 ; i < num ; i++){

    let regex = /([@][#]{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/

    let text = arr[i];
    let sum = '';
    let haveNum = false

    let found = text.match(regex);
    let have = regex.test(text);
    
    if (have){
        let word = found.groups['word'];
        for (const ch of word) {
            let chCode = ch.charCodeAt();
            if (chCode >= 48 && chCode <= 57){
                sum += ch;
                haveNum = true;
            }
        }
        if (haveNum === false){
            sum = '00'
        }

        console.log(`Product group: ${sum}`);

    }
    else {
        console.log("Invalid barcode");
    }
    }
}
code(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])


