import Animal from "./classAnimal.js";

class Dog extends Animal {
    constructor(name, age, legsCount, color, breed, bark) {
        super(name, age, legsCount, color,),
        this.breed = breed,
        this.bark = bark
    }
}

export default Dog