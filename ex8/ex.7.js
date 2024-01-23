function cutAndReverse(text){

    let arr = [];

    for (let i = text.length - 1 ; i >= 0 ; i--){
        arr.push(text[i])

    }
   let reverseText = arr.join("");
   
   let index = text.length/2;
   let firstHalf = reverseText.substring(0 , index);
   let secondHalf = reverseText.substring(index);
   

   console.log(secondHalf+"\n"+firstHalf);
   
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')