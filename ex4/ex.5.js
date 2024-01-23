function palindromeIntegers (arr){

    for (let i = 0 ; i < arr.length ; i++){
        let number = String(arr[i]);
        let buff = "";

        for(let j = number.length - 1 ; j >= 0 ; j--){

            buff += number[j];
        }
        console.log (number === buff);
    }






}

palindromeIntegers([123,323,421,121])