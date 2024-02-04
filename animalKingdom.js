class AnimalKingdom {                           //this is the base abstract class
    constructor(animal, eyes, limbs, size) {
        if(this.constructor === AnimalKingdom)
        throw new Error("Class AnimalKingdom cannot be called or instantiated")    // to ensure abstract class cannot be initialized

        this.eyes = eyes
        this.limbs = limbs
        this.size = size
        this.animal = animal
    }

    #animalName() {                 // a private function that sets name of animal
        return this.animal
    }

    #numberOfEyes() {              // a private functions that sets number of eyes for the animal
        return this.eyes
    }

    #numberOfLimbs() {            // a private function that sets the number of limbs for the animal
        return this.limbs
    }

    #animalSize() {              // a private function that states the size of the animal
        return this.size
    }

    bloodValue(value) {         //to get the type of blood. by default uses conditional statement to know, based on variable passed to it. unless overwritten
        if(value === true) {
            this.blood = "cold blooded"
        } else {
            this.blood = "warm blooded"
        }
    }

    // warmBlooded() {

    // }

    backbone(value) {       //to know whether it has backbone. By default uses conditional statement to check when called
        if(value === true) {
            this.bone = "has backbone"
        } else {
            this.bone = "has no backbone"
        }
    }

    // noBackbone() {


    // }



    animalDetails(bloodvalue, backbone) {   // to print out the details off each animal (instance) of the class
        this.bloodValue()
        this.backbone()
        console.log(this.#animalName() + " has " + this.#numberOfEyes() + " eyes, " + this.#numberOfLimbs() + " limbs, and is " + this.#animalSize() + " in size")
        console.log(this.#animalName() + " is " + this.blood)
        console.log(this.#animalName() + " " + this.bone)
    }
}

class Arthropoda extends AnimalKingdom {
    constructor() {
        super("Athropods", 2, 2, "very small")

    }

    bloodValue() {                       //overwrites the bloodValue function in the base class
        this.blood = "cold-blooded"
    }

    backbone() {                        //overwrites the backbone function in the base class
        this.bone = "has no backbone"
    }

}

class Fish extends AnimalKingdom {
    constructor() {
        super("Fish", 2, 2, "small")
    }

    bloodValue() {                     //overwrites the bloodValue function in the base class
        this.blood = "cold-blooded"
    }

    backbone() {                       //overwrites the backbone function in the base class
        this.bone = "has backbone"
    }

}

class Amphibia extends AnimalKingdom {
    constructor() {
        super("Amphibians", 2, 4, "small")
    }

    bloodValue() {
        this.blood = "cold-blooded"
    }

    backbone() {
        this.bone = "has backbone"
    }

}

class Reptiles extends AnimalKingdom {
    constructor() {
        super("Reptiles", 2, 4, "big")
    }

    bloodvalue() {
        this.blood = "cold-blooded" 
    }

    backbone() {
        this.bone = "has backbone"
    }

}

class Aves extends AnimalKingdom {
    constructor() {
        super("Aves", 2, 2, "medium")
    }

    bloodValue() {
        this.blood = "warm-blooded"
    }

    backbone() {
        this.bone = "has backbone"
    }
}

class Mammals extends AnimalKingdom {
    constructor() {
        super("Mammals", 2, 4, "very big")
    }

    bloodValue() {
        this.blood = "warm-blooded"
    }

    backbone() {
        this.bone = "has backbone"
    }

}


//Below, all details ae=re gotten for all six classes of animal kingdom using the animalDetails() function
const athropod = new Arthropoda()
// animal.bloodValue()
// animal.backbone(true)
athropod.animalDetails()

const fish = new Fish()
fish.animalDetails()

const amphibia = new Amphibia()
amphibia.animalDetails()

const reptile = new Reptiles()
reptile.animalDetails()

const aves = new Aves()
aves.animalDetails()

const mammal = new Mammals()
mammal.animalDetails()