function pianist (arr){

let n = Number (arr.shift());
let allPieces = [];

for (let i = 0 ; i < n ; i++){
    let line = arr.shift();
    let [piece , composer , key] = line.split('|');
    allPieces.push({
        piece,
        composer,
        key
    })
};

for (let i = 0; i < arr.length ; i++){
    let line = arr[i];
    if (line === 'Stop'){
        break;
    };
    let token = line.split('|');
    let command = token[0];
    let piece = token[1];
    if (command === 'Add'){
        let composer = token[2];
        let key = token[3];
        let isItTrue = true;
        for (x = 0 ; x < allPieces.length ; x++){
            let currentPiece = allPieces[x];
            if (currentPiece.piece === piece){
                isItTrue = false;
                console.log(`${piece} is already in the collection!`);
            }
        }
        if (isItTrue){
            allPieces.push({
                piece,
                composer,
                key
            });
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }

    }
    else if (command === 'Remove'){
        let isItTrue = true;
        for (x = 0 ; x < allPieces.length ; x++){
            let currentPiece = allPieces[x];
            if (currentPiece.piece === piece){
                isItTrue = false;
                allPieces.splice(x,1);
                console.log(`Successfully removed ${piece}!`);
            }
        }
        if (isItTrue){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }

    }
    else if (command === 'ChangeKey'){
        let newKey = token[2];
        let isItTrue = true;
        for (x = 0 ; x < allPieces.length ; x++){
            let currentPiece = allPieces[x];
            if (currentPiece.piece === piece){
                isItTrue = false;
                currentPiece.key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
        }
        if (isItTrue){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }

    }
}
for (let i = 0; i < allPieces.length; i++){
    let currentPiece = allPieces[i];

    console.log(`${currentPiece.piece} -> Composer: ${currentPiece.composer}, Key: ${currentPiece.key}`);
}

}
pianist (['3','Fur Elise|Beethoven|A Minor','Moonlight Sonata|Beethoven|C#Minor','Clair de Lune|Debussy|C# Minor','Add|Sonata No.2|Chopin|B Minor','Add|Hungarian RhapsodyNo.2|Liszt|C# Minor','Add|Fur Elise|Beethoven|C# Minor','Remove|Clair de Lune','ChangeKey|Moonlight Sonata|C#Major','Stop'])