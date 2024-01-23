function asda(arr){

    let text = arr[0];

    let regex = /([|#])(?<product>[A-Za-z\s]+)\1(?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<cal>[0-9]{1,4})\1/g

    let sumCal = 0;
    let buff ='';
    let allProduct = [];
    let matches = text.matchAll(regex);

    for (let match of matches) {

        let product = match.groups['product'];
        let date = match.groups['date'];
        let cal = Number (match.groups['cal']);

        buff = `Item: ${product}, Best before: ${date}, Nutrition: ${cal}`;

        allProduct.push(buff);

        sumCal += cal;
        
    }

    let days = sumCal / 2000;

    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    for (const product of allProduct) {
        console.log(product);
    }



}
asda([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])