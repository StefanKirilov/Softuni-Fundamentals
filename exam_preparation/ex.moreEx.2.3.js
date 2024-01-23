function deserializeString(arr){

    let text = '';
    let sumIndex = 0;
    
    for (let i = 0 ; i<arr.length; i++){
        let line = arr[i];
        if (line === 'end'){
            break;
        }
       
        let [ch , tokens] = line.split(':');
        let indexArr = tokens.split('/');
     


        sumIndex++;
    }




}
deserializeString(['a:0/2/4/6',
'b:1/3/5',
'end'])