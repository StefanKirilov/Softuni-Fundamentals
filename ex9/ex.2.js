function race(text){
    let list = text.shift().split(", ");
    let name = /[A-Za-z]/g;
    let numbers = /[0-9]/g;

    let obj = {};

    for (const player of list) {
        obj[player] = 0;
    }

    for (const line of text) {
        if (line === "end of race"){
            break;
        }
        
            let checkedName = line.match(name).join("");
                let distance = line.match(numbers);
                let tempDistance = 0;
                for (const num of distance) {
                    tempDistance += Number(num);
                }
                
            if (obj.hasOwnProperty(checkedName)){
                obj[checkedName] += tempDistance;
            }
            
        }  

        let sortObj = Object.entries(obj).sort((a,b) => b[1] - a[1]);
      console.log(`1st place: ${sortObj[0][0]}`);
      console.log(`2nd place: ${sortObj[1][0]}`);
      console.log(`3rd place: ${sortObj[2][0]}`);
        
        }
    
    
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])