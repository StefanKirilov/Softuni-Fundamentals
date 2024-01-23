function softUni (text){


    let regex = /%(?<name>[A-Z][a-z]*)%(?:[A-Za-z]*)<(?<product>[\w]*)>(?:[A-Za-z]*)\|(?<count>[0-9]+)\|(?:[A-Za-z]*)(?<price>[0-9.]+)\$/

    let allPrice = 0;

    for (const line of text) {
        if (line === 'end of shift'){
            break;
        }
        if (regex.test(line)){
            let data = regex.exec(line);
            let customer = data.groups.name;
            let product = data.groups.product;
            let price = Number(data.groups.price) * Number(data.groups.count);

            console.log(`${customer}: ${product} - ${price.toFixed(2)}`);
            allPrice += price;
        }
        
    }

    console.log(`Total income: ${allPrice.toFixed(2)}`);

}
softUni(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])