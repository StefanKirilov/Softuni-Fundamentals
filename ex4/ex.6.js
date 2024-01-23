function passwordValidator (text){
    let hasValidLength = validation(text);
    let hasValidSymbol = nonSpecChar(text);
    let hasValidDigit = checkForNumbers(text);

    printResult (hasValidLength , hasValidDigit , hasValidSymbol);

function validation (text){
    if (text.length >= 6 && text.length <=10){
        return true;
    }
    else {
        return false;
    }
}

    function nonSpecChar(text){

        for (char of text ){
            let num = char.charCodeAt(0);
            if (num > 48 && num < 57 || num > 65 && num < 132 || num > 97 && num < 122){
                continue;
            }
            else {
                return false;
            }
            
        }
        return true;
    }

    function checkForNumbers (text){
        let numCounter = 0;
        for (char of text ){
        let num = char.charCodeAt(0);
        if (num > 48 && num < 57) {
            numCounter ++;
        }
           
        }
        if (numCounter >= 2){
            return true;
        }
        else {
            return false;
        }
    }
function printResult(validLength , validDigit ,validSymbol){
    if (!validLength){
        console.log("Password must be between 6 and 10 characters");
    }
    if (!validSymbol){
        console.log("Password must consist only of letters and digits");
    }
    if(!validDigit){
        console.log("Password must have at least 2 digits");
    }

if (validDigit && validLength && validSymbol){
    console.log("Password is valid");
}
}

}
passwordValidator('Pa$s$s')