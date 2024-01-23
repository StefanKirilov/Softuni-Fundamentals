function destination (text){

    let regex = /([\/=])(?<word>[A-Z][A-Za-z]{2,})\1/g

    
    let targer = [];
    let sum = 0;

    let matches = text.matchAll(regex);

    for (let match of matches) {
        let country = match.groups['word'];
        sum += country.length;
        targer.push(country);
    };
    console.log(`Destinations: ${targer.join(', ')}`);


    console.log(`Travel Points: ${sum}`);
}
destination("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=") 