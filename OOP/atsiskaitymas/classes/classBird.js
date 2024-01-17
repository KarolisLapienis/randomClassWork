import Animal from "./classAnimal.js";

class Bird extends Animal {
    constructor(name, age, legsCount, color, species, beak) {
        super(name, age, legsCount, color),
        this.species = species,
        this.beak = beak
    }
}

export default Bird