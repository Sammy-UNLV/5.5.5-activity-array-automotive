
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
document.getElementById("output").innerHTML = v.make;




class mercurySedan extends vehicle {
    constructor (maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make);
        super(model);
        super(year);
        super(color);
        super(speed);
        super(started);
        super(passenger);

        //super(passenger) not added because mercurySedanhas its own values.
        //super(numberOfWheels) not addedfor the same reason as above.
        
        this.maximumPassengers = 6;
        this.numberofWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;

    }
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    loadPassenger(){
        if (this.loadPassenger = this.maximumPassengers ){
            console.log("vehicle is at max capacity, no more passenger can fit");
        }else if (this.maximumPassneger - this.loadPassenger === 1){
            console.log("We have enough room for 1 more. Come on in.");
            this.loadPassenger += 1;
        }else{
            console.log("We have more than enough room. Come inside.");
            this.loadPassenger += 1;
        }

    }
    scheduledService(){
        if (parseInt(this.milage) >30000 ){
            console.log("Vehicle has reached 30,000 miles. Schedule service") 
        }else if (this.milage - this.loadPassenger === 1){
            console.log("We have enough room for 1 more. Come on in.");
            this.loadPassenger += 1;
        }else{
            console.log("We have more than enough room. Come inside.");
            this.loadPassenger += 1;
        }
    }
}
// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
document.getElementById("output").innerHTML = "TEST";