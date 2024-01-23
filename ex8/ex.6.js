function pascalCase(text){

let arr = [];
let index = 0;

for (let i = 1 ; i < text.length ; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
    arr.push(text.substring(index , i));
    index = i;
    }
}
arr.push(text.substring(index, text.length))
console.log(arr.join(", "));

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')