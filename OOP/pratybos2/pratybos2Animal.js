class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    setAge(){
        this.age++
    }
    getInfo(){
        console.log(`'Name: ${this.name}', 'Age: ${this.age}'`)
    }
}

const human = new Animal('Tomas', 77)

console.log(human)

class Dog extends Animal {
    constructor(name, age, color, legsCount){
        super(name, age)
        this.color = color
        this.legsCount = legsCount
    }
    getInfo(){
        console.log(`'Name: ${this.name}', 'Age: ${this.age}', 'Color: ${this.name}', 'Legs: ${this.legsCount}'`)
    }
}

const baris = new Dog('Baris', '20', 'Brown-striped', 4)
console.log(baris)
baris.setAge()
baris.getInfo()