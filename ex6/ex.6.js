function dictionary(data){

    let collection = {};

    for (let line of data){
        let object = JSON.parse(line);
        let key = Object.keys(object)[0];
        collection[key] = object[key];
    }

    let sortKeys = Object.keys(collection).sort ((a,b) => a.localeCompare(b));

    for (let key of sortKeys ){
        console.log(`Term: ${key} => Definition: ${collection[key]}`
        );
    }


}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )