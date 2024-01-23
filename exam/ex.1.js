function computerStore(input){

let command = "";
let price = 0;

for (let i = 0 ; i < input.length ; i++){

    command = input[i];

    if (command === "special" || command === "regular"){

        break;
    }

    

    command = Number(input[i]);

    if (command < 0 ){
        console.log("Invalid price!");
        continue;
    }

    price += command;
    


}
if (price === 0){
    console.log("Invalid order!");
    return;
}

let taxes = price * 0.20;
let allPrice = taxes + price;



if (command === "special"){

    allPrice = allPrice - (allPrice * 0.10);
}


console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${price.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${allPrice.toFixed(2)}$`);



}
computerStore([

    'regular'
    
    ]);