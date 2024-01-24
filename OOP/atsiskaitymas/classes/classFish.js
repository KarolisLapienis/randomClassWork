import Animal from "./classAnimal.js";

class Fish extends Animal {
    constructor(name, age, legs, color, species, scales) {
        super(name, age, legs, color),
        this.species = species,
        this.scales = scales
    }
}

export default Fish