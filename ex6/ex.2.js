function towns (input){
   

    for (let i = 0 ; i < input.length ; i++){
        let obj = {};
        let  [name, latitude, longitude] = input[i].split(" |");
        obj.town = name;
        obj.latitude = Number(latitude).toFixed(2);
        obj.longitude = Number(longitude).toFixed(2);

        console.log(obj);

    }



}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);