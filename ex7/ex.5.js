function cardGame(input){
    let pointsCard = {
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "10":10,
        "J":11,
        "Q":12,
        "K":13,
        "A":14
    };

    let pointColor = {
        "C":1,
        "D":2,
        "H":3,
        "S":4
    }

    let map = new Map();
    

    for (const line of input) {
        let [name , cards] = line.split(": ");
        if (!map.has(name)){
            map.set(name , new Set());
        }
            let cardsArray = cards.split(", ");
            for (const card of cardsArray) {
                map.get(name).add(card);
     
             }
            
    }

    for (const player of Array.from(map)) {
        let sum = 0;
        let [name , cards] = player;
        for (const card of cards) {
            let pointCards = card.split("");
            let point = pointsCard[pointCards.splice(0,pointCards.length - 1).join("")] * pointColor[pointCards[pointCards.length - 1]];
            sum += point;
        }

        console.log(name + ": " + sum);
    }



}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])