function piccolo(input){

    let obj = {};

    for (const command of input) {
        let [direction , carNumber] = command.split(", ");

        if (direction === "IN"){
            obj[carNumber] = carNumber;
        }
        else {
            delete obj[carNumber];
        }

        }

        if(Object.keys(obj).length === 0) {
            console.log(`Parking Lot is Empty`);
        }
        else {
        let objToArr = Object.entries(obj).sort((a,b) => a[1].localeCompare(b[1]));

        objToArr.forEach(number => {
            console.log(number[1]);
        });
    }
    }

    


piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)