function rageQuit (text){

    let regex = /(?<word>[^0-9]*)(?<num>[0-9])/g;

   
        
    let finalText = '';
    let uniqueSymbols = 0;
    let symbols = [];


    let result = regex.exec(text);

    while(result !== null) {
        
        let word = result[1];
        let num = result[2];
        word = word.toUpperCase();
        for (let i = 0 ; i < word.length ; i++){
            let ch = word[i];
            if (!symbols.includes(ch)){
                symbols.push(ch);
                uniqueSymbols++;
            }
            

        }
        let repeatWord = word.repeat(num);
        finalText += repeatWord;

        result = regex.exec(text);
    }



    console.log(`Unique symbols used: ${uniqueSymbols}`);
    console.log(finalText);


}
rageQuit(e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf('d0($!$`e/{D'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');