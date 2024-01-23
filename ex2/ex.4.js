function convertToKm (input){

    let km = (input / 1000).toFixed(2);
    return km;
}
console.log(convertToKm(1852))