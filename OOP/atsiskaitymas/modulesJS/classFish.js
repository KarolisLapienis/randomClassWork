import Animal from "./classAnimal.js";

class Fish extends Animal {
    constructor(name, age, legsCount, color, species, scales) {
        super(name, age, legsCount, color),
        this.species = species,
        this.scales = scales
    }
}

export default Fish