function replace(data){

    let text = data[0];
    
    

    for (let i = 1 ; i < data.length ; i++){
        let currentCh = data[i];
        let prevCh = data[i-1];
        if(currentCh !== prevCh){
            text += currentCh
        }
      
    }

    console.log(text);


}
replace('aaaaabbbbbcdddeeeedssaa')