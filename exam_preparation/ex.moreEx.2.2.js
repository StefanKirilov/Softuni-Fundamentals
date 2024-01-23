function serializeString (arr){

    let text = arr[0];
    let chArr = [];
    
    
    

    for (let i = 0 ; i < text.length ; i++){
        if (!chArr.includes(text[i])){
            chArr.push(text[i])
        }
    }
    for (let ch of chArr) {
        let indexArr = [];
        for (let i = 0 ; i < text.length; i++){
        if (text[i] === ch){
            let index = text.indexOf(ch);
            indexArr.push(i)
        }
      }    
      let buff =`${ch}:${indexArr[0]}`
      for (let j = 1 ; j < indexArr.length; j++){
        buff +=`/${indexArr[j]}`
      }
      console.log(buff);  
    }
  
}
serializeString(["abababa"]);