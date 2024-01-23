function furniture(text){

    let regex = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>[0-9.]+)!(?<quality>[0-9]+)/;

    console.log("Bought furniture:");

    let totalPrice = 0;

    for (const line of text) {
        if (line === "Purchase"){
            break;
        }

       if(regex.test(line)){
        let product = regex.exec(line);
        let price = Number(product.groups.price) * Number(product.groups.quality);
        console.log(product.groups.name);
        totalPrice += price;
       }
       

    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);



}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])