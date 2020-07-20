class Car{

setName(name){
this.name = name;

}

startEngine(){

    console.log('Engine started for this:' + this.name);
}

stopEngine(){
    console.log('Engine stopped for this :' + this.name);
}

}


class Toyota extends Car {

    topSpeed(speed){

        console.log('top speed for ' + this.name + ' ' +speed);
    }   
}

let myCar = new Toyota();
myCar.setName('Camry');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);

