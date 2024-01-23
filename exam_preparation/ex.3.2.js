function destinationMapper (arr){
    
    let regex = /([=\/])(?<word>[A-Z][A-Za-z]{2,})\1/g;
    let points = 0;
    let destination = [];
    


        let foundDestination = arr.matchAll(regex);
        
            for (const match of foundDestination) {
                let country = match.groups["word"];
                points += country.length;
                destination.push(country);
    }

    console.log(`Destinations: ${destination.join(', ')}`);

    console.log(`Travel Points: ${points}`);

}
destinationMapper ("ThisIs some InvalidInput") ;