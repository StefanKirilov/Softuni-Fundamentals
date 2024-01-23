function storeProvision(store , addStore){

    let availability = {};

    for(let i = 0 ; i < store.length ; i+=2){
        let name = store[i];
        let count = Number(store[i + 1]);

        availability[name] = count;
        
    }
    for(let i = 0 ; i < addStore.length ; i+=2){
        let name = addStore[i];
        let count = Number(addStore[i + 1]);
            if (availability.hasOwnProperty(name)){
                availability[name] += count;
            }
            else { availability[name] = count};
        
    }
    for (let key of Object.keys(availability)){

console.log(`${key} -> ${availability[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    );