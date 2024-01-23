function distinctArray (input){
let newArr =[];
for ( el of input) {
    if (newArr.indexOf(el) === -1){
        newArr.push(el);
    }
}

console.log(newArr.join(" "));


}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
