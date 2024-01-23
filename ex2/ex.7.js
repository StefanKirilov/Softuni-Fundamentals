function upperOrLower (char){
let charCode = char.charCodeAt();
if (charCode >= 65 && charCode <= 90 ){
    return ("upper-case");
}
else if ( charCode >= 97 && charCode <= 122){
    return ("lower-case");
}
}
console.log(upperOrLower("L"))