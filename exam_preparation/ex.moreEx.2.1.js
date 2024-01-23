function valueOfString (arr){
let text = arr[0];
let lowOrUp = arr[1];
let sum = 0;

for (let ch of text) {
    if (lowOrUp === 'LOWERCASE'){
        let codeCh = ch.charCodeAt();
        if(codeCh > 96 && codeCh < 123){
            sum += codeCh;
        }

    }
    else if (lowOrUp === 'UPPERCASE'){
        let codeCh = ch.charCodeAt();
        if(codeCh > 64 && codeCh < 91){
            sum += codeCh;
        }
    }
}

console.log(`The total sum is: ${sum}`);



}
valueOfString(['AC/DC',
'UPPERCASE']
);