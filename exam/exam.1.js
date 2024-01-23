function cooking (arr){
    let budget = Number(arr.shift());
    let students = Number(arr.shift());
    let priceFlour = Number(arr.shift());
    let priceEgg = Number(arr.shift());
    let priceApron = Number(arr.shift());
    let freePack = 0;

   for ( i = 0 ; i <= students ; i++){
    if (i % 5 === 0){
        if (i !==0){
    freePack ++;
        }
    }
   }

    let needEgg = priceEgg * 10 * students;
    let needFlour = priceFlour * (students - freePack);
    let needApron = (priceApron * Math.ceil(students * 1.20));

    let allSum = needEgg + needApron + needFlour;

  

    if (budget >= allSum){
        console.log(`Items purchased for ${allSum.toFixed(2)}$.`);
    }
    else {
        let neededMoney = allSum - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }




}
cooking ([100,

    25,
    
    4.0,
    
    1.0,
    
    6.0])