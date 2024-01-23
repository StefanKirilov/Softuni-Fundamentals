function loadingBar (input){

    let number = Number(input);
    let sum = 0;
    let symbol = "";
    let dots = ""; 

for (let i = 1 ; i <= 10 ; i++){


    sum = number / i;
    if (sum === 10){
       switch (number){
        case 100 :
            console.log("100% Complete!");
            console.log("[%%%%%%%%%%]");
            break;
            default :
            for (let j = 1 ; j <= i ; j++){

                symbol += "%" ;
            
            }
            for (let k = 1 ; k <= 10 - i ; k++){

                dots += "." ;
            
            }
            
            console.log(`${number}% [${symbol}${dots}]`);
            console.log("Still loading...");
            break;
       }
    }
    
}

}
loadingBar(30)