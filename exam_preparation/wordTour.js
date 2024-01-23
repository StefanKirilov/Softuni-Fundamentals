function worldTour (arr){
    let string = arr.shift();
    let length = string.length;
    
    for (let i = 0 ; i < arr.length; i++){
        let line = arr[i];
        
        if(line === 'Travel'){
            break;
        };
        let token = line.split(':');
        let command = token[0];
        if (command === 'Add Stop'){
            let index = Number(token[1]);
            let word = token[2];
            if (index < length - 1){
                let leftStr = string.substring(0,index);
                let rightStr = string.substring(index);
                string = leftStr + word + rightStr;
            }
            console.log(string);
    
        }
        else if (command === 'Remove Stop'){
            let startIndex = Number(token[1]);
            let endIndex = Number(token[2]);
            if(endIndex < length && endIndex - startIndex < length){
            let removeString = string.substring(startIndex,endIndex + 1);
            string = string.replace(removeString,'');
            
            }
            console.log(string);
    
    
        }
        else if (command === 'Switch'){
            let oldString = token[1];
            let newString = token[2];
            if (string.includes(oldString)){
                string = string.replace(new RegExp (oldString , 'g'), newString);
                
        }
        console.log(string);
  
    
        }
    
    }
    
    console.log(`Ready for world tour! Planned stops: ${string}`);
    }

    worldTour (["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
    