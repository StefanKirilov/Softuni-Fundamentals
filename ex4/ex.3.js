function charInRange(a , b) {

    let numCharA = Number(a.charCodeAt());
    let numCharB = Number(b.charCodeAt());

    let buff = "";
     firstChar = numCharB > numCharA ? numCharA : numCharB;
     secondChar = numCharB > numCharA ? numCharB : numCharA;

    for (let i = firstChar+1; i < secondChar; i++){

        let char = String.fromCharCode(i);
        buff += char + " ";
    }
console.log(buff);
}

charInRange('C',
'#')