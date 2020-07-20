class Animal{

    constructor(name){
        this.name = name;
    }

    eats() {
      console.log(this.name+' eats food');  
    }


}

class Aligator extends Animal {
    
    eats(){
        super.eats();
        console.log(this.name+' eats fish');
    }
}

let murphy = new Aligator('Murphy');
murphy.eats();

