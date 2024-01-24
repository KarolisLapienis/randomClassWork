import Animal from "./classAnimal.js";

class Dog extends Animal {
    constructor(name, age, legs, color, breed, bark) {
        super(name, age, legs, color,),
        this.breed = breed,
        this.bark = bark
    }
}

export default Dog