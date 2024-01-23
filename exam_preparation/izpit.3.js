function followers(arr){

    let catalog = [];


    for (let i = 0; i< arr.length ; i++){
        if (arr[i] === 'Log out'){
            break;
        }
        let tokens = arr[i].split(': ');
        let command = tokens[0];
        let name = tokens[1];
        let have = false;
        
        switch (command) {
            case 'New follower':
                for (let j = 0; j < catalog.length ; j++){
                    let currentName = catalog[j];
                    if (currentName.name === name){
                        have = true;
                        break;
                    }
                }
                if (have === false){
                    catalog.push({
                        'name': name,
                        'count': 0
                    })
                }
                break;
                case 'Like':
                    let count = Number(tokens[2]);
    
                for (let j = 0; j < catalog.length ; j++){
                    let currentName = catalog[j];
                    if (currentName.name === name){
                        have = true;
                        currentName.count += count;
                    }
                }
                if (have === false){
                    catalog.push({
                        'name': name,
                        'count': count
                    })
                }
                break;
                case 'Comment':
                    for (let j = 0; j < catalog.length ; j++){
                        let currentName = catalog[j];
                        if (currentName.name === name){
                            have = true;
                            currentName.count += 1;
                        }
                    }
                    if (have === false){
                        catalog.push({
                            'name': name,
                            'count': 1
                        })
                    }

                break;
                case 'Blocked':
                    for (let j = 0; j < catalog.length ; j++){
                        let currentName = catalog[j];
                        if (currentName.name === name){
                            have = true;
                            catalog.splice(j,1);
                        }
                    }
                    if (have === false){
                        console.log(`${name} doesn't exist.`);
                    }

                break;
        }
    }

console.log(`${catalog.length} followers`);
for (let people of catalog ) {
    console.log(`${people.name}: ${people.count}`);
    
}

}
followers(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"]);