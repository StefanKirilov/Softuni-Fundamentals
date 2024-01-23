function modifier(arr){
    let firstLine = arr.shift().split(" ").map(Number);

    let nextLine = arr.shift().split(" ");
    let command = nextLine[0];
    

    while (command !== "end"){
        if (command === "swap"){
        let buff = Number(firstLine[nextLine[1]]);
        firstLine[nextLine[1]] = firstLine[nextLine[2]];
        firstLine[nextLine[2]] = buff;
        }
        else if (command === "multiply"){
            let newNumber = Number(firstLine[nextLine[1]]) * Number(firstLine[nextLine[2]]);
            firstLine.splice(nextLine[1] , 1 , newNumber);
        }
        else if (command === "decrease"){
           firstLine = firstLine.map(n => (n - 1));

        }

        nextLine = arr.shift().split(" ");
        command = nextLine[0];
        
    }
    console.log(firstLine.join(", "));

}
modifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
   ]
   );