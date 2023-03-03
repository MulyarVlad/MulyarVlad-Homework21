class Person {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

const human = new Person("John", "man");

const human_2 = new Person("Bob", "man");


class Apartement {
    residents = [];  
    
    addResidents(resident) {
        if (resident instanceof Person) {
            this.residents.push(resident);
        } else {
            console.log("Unfortunately, this object is not instance of People")
        }
    }
}

class House {
    
    constructor(maxAmountOfApartements) {
        this.apartements = [];
        this.maxAmountOfApartements = maxAmountOfApartements;
    }

    addAppartement(flat) {
        if (this.apartements.length < this.maxAmountOfApartements) {

            if (flat instanceof Apartement) {
            this.Apartements.push(flat);
            } else {
            console.log("Unfortunately, this object is not instance of House")
            }
        } else {
            console.log(`Max amount of apart. ${this.maxAmountOfApartements}`)
        }

}
}

const apartement1 = new Apartement();
const apartement2 = new Apartement();

apartement1.addResidents(human);
apartement2.addResidents(human_2);

const build = new Build(2);

build.addAppartement(apartement1);
build.addAppartement(apartement2);
build.addAppartement(apartement2);