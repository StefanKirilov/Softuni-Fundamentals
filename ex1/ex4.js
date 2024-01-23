function vacation(count, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = count * 8.45;
                if (count >= 30) {
                    price = price * 0.85;
                }
            }
            if (type === "Business") {
                if (count >= 100) {
                    count = count - 10;
                }
                price = count * 10.90;
            }
            if (type === "Regular") {
                price = count * 15;

            }

            break;
        case "Saturday":
            if (type === "Students") {

                price = count * 9.50;
                if (count >= 30) {
                    price = price * 0.85;
                }
            }
            if (type === "Business") {
                if (count >= 100) {
                    count = count - 10;
                }
                price = count * 15.60;
            }
            if (type === "Regular") {
                price = count * 20;
                if (count >= 10 && count <= 20) {
                    price = price * 0.95;
                }
            }
                break;
        case "Sunday":
            if (type === "Students") {
                price = count * 10.46;
                if (count >= 30) {
                    price = price * 0.85;
                }
            }
            if (type === "Business") {
                if (count >= 100) {
                    count = count - 10;
                }
                price = count * 16;
            }
            if (type === "Regular") {
                price = count * 22.50;
                if (count >= 10 && count <= 20) {
                    price = price * 0.95;
                }
            }
            break;
    }

    

console.log (`Total price: ${price.toFixed(2)}`);


}

vacation (30,"Students","Sunday")