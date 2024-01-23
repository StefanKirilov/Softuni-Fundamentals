function barcode (arr){
    let n = Number(arr.shift());

    let regex = /([@][#]+)(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;

    for (let i = 0; i < n; i++){

        let text = arr[i];
        let sum = '';
        let haveNum = false;

        let result = text.match(regex);
        let haveOrNo = regex.test(text);
        if (haveOrNo){
            for (let j = 0 ; j < text.length ; j++){
                let ch = text[j];
                let code = ch.charCodeAt();
                if (code >= 48 && code <= 57){
                    sum += text[j];
                    haveNum = true;
                }
            }
            if (haveNum === false){
                sum = '00';
            }
            console.log(`Product group: ${sum}`);
        }
        else {
            console.log("Invalid barcode");
        }
    }


}
barcode (["3",

"@#FreshFisH@#",

"@###Brea0D@###",

"@##Che4s6E@##"]);