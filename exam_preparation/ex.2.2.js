function astra(arr){

    let text = arr[0];
    let regex = /([|]|[#])(?<item>[a-zA-Z\s]+)\1(?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<cal>[0-9]{1,5})\1/gm

    let match = regex.exec(text);
    let totalCal = 0;
    
    let buff = "";

    while(match){

        let item = match.groups['item'];
        let date = match.groups['date'];
        let cal = Number(match.groups['cal']);
        buff += `Item: ${item}, Best before: ${date}, Nutrition: ${cal}\n`;

        totalCal += cal;


        match = regex.exec(text);
    }

    let days = Math.floor(totalCal / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    console.log(buff);

}
astra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);