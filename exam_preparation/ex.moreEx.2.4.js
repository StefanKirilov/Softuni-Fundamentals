function asciiSumator(arr){

    let firstCh = arr[0];
    let secondCh = arr[1];
    let string = arr[2];
    let sum = 0;
    let firstCode = firstCh.charCodeAt(0);
    let secondCode = secondCh.charCodeAt(0);
    if (firstCode > secondCode){
        let c = firstCode;
        firstCode = secondCode;
        secondCode = c;
    }

    for (let ch of string) {
        let chCode = ch.charCodeAt(0);
        if (chCode > firstCode && chCode < secondCode){
            sum += chCode;
        }
        
    }
    console.log(sum);


}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
)