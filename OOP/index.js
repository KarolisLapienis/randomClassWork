//1 oop skaidriu pratybos

//1 uzduotis

class Person {
    constructor(name, lastName, age, gender, email) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.email = email
    }
    printInfo(){
        console.log(`'Name: ${this.name}', 'Last name: ${this.lastName}', 'Age: ${this.age}', 'Gender: ${this.gender}', 'Email: ${this.email}`)
    }
}

const karolis = new Person('Karolis', 'As', '31', 'male', 'kazkas@gmail.com')

console.log(karolis)
karolis.printInfo()

//2 uzduotis

class Animal {
    static print(){ //lieka tik klaseje, leidzia iskviesti tiesiai is klases
        console.log('I`m an animal')
    }
}

const kentaur = new Animal()
console.log(kentaur)
Animal.print()

//3 uzduotis

class Student extends Person {
    constructor(name, lastName, age, course, avgGrade) {
        super(name, lastName, age)
        this.course = course
        this.avgGrade = avgGrade
    }
    printInfo(){
        console.log(`'Name: ${this.name}', 'Last name: ${this.lastName}', 'Age: ${this.age}', 'Course: ${this.course}', 'Avarage grade: ${this.avgGrade}'`)
    }
}


const studentKarolis = new Student('Karolis', 'As', '31', 'JavaScript', '9' )

studentKarolis.printInfo()


//4 uzduotis

class Teacher extends Person {
    constructor(name, lastName, age, gender, email, course, wage){
        super(name, lastName, age, gender, email)
        this.course = course
        this.topics = []
        this.wage = wage
    }
    printIfGoodWage(){
        if(this.wage > 800){
            console.log('Not bad.')
        }
        else if(this.wage > 1200){
            console.log('Hoooray!!!')
        }
        else{
            console.log('not happy!')
        }
    }
    
    setTopic(topikas){
        this.topics.push(topikas)
    }

    getTopics(){
        this.topics.forEach(topic=>console.log(topic))
    }
}



const teacherAldona = new Teacher('Aldona', 'Kazkokieniene', '55', 'Female', 'kazkokiene@gmail.com', 'JS', 1000)

teacherAldona.setTopic('OOP')
teacherAldona.setTopic('XXXX')


console.log(teacherAldona)
teacherAldona.printIfGoodWage()




// class TransportoPriemone {
//     greitis() {
//         console.log('Judu greitai!')
//     }
// }

// class Automobilis extends TransportoPriemone {

//     marke() {
//         console.log('BMW')
//     }
// }

// const automobilis = new Automobilis()
// automobilis.greitis()
// automobilis.marke()