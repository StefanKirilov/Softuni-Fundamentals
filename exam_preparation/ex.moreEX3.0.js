class Laptop {
    constructor(info , quality , isOn){
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    showInfo (){
        return JSON.stringify(info);
    }
    turnOn (){
       this.isOn = true;
       this.quality = this.quality - 1;


    }
    turnOff (){
       this.isOn = false;
       this.quality = this.quality - 1;
    }

    quality (){

       return this.quality

    }
    get price () {

        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }
}

let info = {producer: "Lenovo",
age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn)

