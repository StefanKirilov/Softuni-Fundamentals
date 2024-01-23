function flight(arr){
    let allFlight = arr[0];
    let newFligth = arr[1];
    let checkStatus = arr[2][0];
    
    let obj = {};

    

    for (let flight of allFlight) {

        let [number , city] = flight.split(' ');
        
        obj[number] = {
            'Destination': city,
            'Status': 'Ready to fly'
        }      
    }
    for (let change of newFligth) {
        let [flight , status] = change.split(' ');
        for (let key in obj) {
            if (flight === key){
                for (let status of Object.keys(obj[key])) {
                    if (status === 'Status'){
                        obj[key][status] = 'Cancelled'
                    }
                }

            }
            
        }
        
        
    }

    for (let [key,prop] of Object.entries(obj)) {

            for (let value in prop) {
                if (prop[value] === checkStatus){
                    console.log(prop);
                }
            }
    }

    
    



}
flight([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled','WN612 Cancelled','WN1173 Cancelled','SK430 Cancelled'],
['Cancelled']])

