function treasureFinder(arr){
    let keys = arr.shift().split(' ');
    let lengthKey = Number(keys.length);
    let newText = '';
    
    

    for (let i = 0; i < arr.length ; i++){
        let line = arr[i];
        if (line === 'find'){
            break;
        };
        for (let j = 0 ; j < line.length ; j = j + lengthKey ){
            

            for (let key of keys) {
                let p = j;
                for (let x = p ; x <= p ; x++){
        
                        let number = Number(key);
                    let ch = line[x];
                    let codeCh = Number(ch.charCodeAt(x));
                    let newCodeCh = codeCh - number;
                    let newCh = String.fromCharCode(newCodeCh);
                    newText += newCh;
                    p++;
                    if (p > x){
                        break;
                    }
                    }
                }
                
            }
        }




}
treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA","find"])
