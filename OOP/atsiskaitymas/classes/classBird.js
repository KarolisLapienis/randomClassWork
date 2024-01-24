import Animal from "./classAnimal.js";

class Bird extends Animal {
    constructor(name, age, legs, color, species, beak) {
        super(name, age, legs, color),
        this.species = species,
        this.beak = beak
    }
}

export default Bird