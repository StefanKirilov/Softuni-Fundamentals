function ages (input) {
let age = Number(input);
let result ="";

if (age >= 0 && age <= 2) {
    result = "baby";
}
else if (age <= 13 && age > 2) {
    result = "child";
}
else if (age <= 19 && age > 13) {
    result = "teenager";
}
else if (age <= 65 && age > 19) {
    result = "adult";
}
else if (age >= 66) {
    result = "elder";
}
    else {
        result = "out of bounds";
    }
    console.log (result);

}
ages ("-1");