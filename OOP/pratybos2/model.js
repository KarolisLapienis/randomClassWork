export class Animal {
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
