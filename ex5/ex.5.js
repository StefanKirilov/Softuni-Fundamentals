function sort(input){
input.sort((a , b) => {
    if (a.length - b.length == 0) {
        return a.localeCompare(b);
    }
   return a.length - b.length});
    
console.log(input.join("\n"))

}
sort(['alpha','beta','gamma']);