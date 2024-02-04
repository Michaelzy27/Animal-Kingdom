class AnimalKingdom {                           //this is the base abstract class
    constructor(animal, eyes, limbs, size) {
        if(this.constructor === AnimalKingdom)
        throw new Error("Class AnimalKingdom cannot be called or instantiated")    // to ensure abstract class cannot be initialized

        this.eyes = eyes
        this.limbs = limbs
        this.size = size
        this.animal = animal
    }

    #animalName() {
        return this.animal
    }

    #numberOfEyes() {
        return this.eyes
    }

    #numberOfLimbs() {
        return this.limbs
    }

    #animalSize() {
        return this.size
    }

    bloodValue(value) {
        if(value === true) {
            this.blood = "cold blooded"
        } else {
            this.blood = "warm blooded"
        }
    }

    // warmBlooded() {

    // }

    backbone(value) {
        if(value === true) {
            this.bone = "has backbone"
        } else {
            this.bone = "has no backbone"
        }
    }

    // noBackbone() {


    // }



    animalDetails(bloodvalue, backbone) {
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

    bloodValue() {
        this.blood = "cold-blooded"
    }

    backbone() {
        this.bone = "has no backbone"
    }

}

class Fish extends AnimalKingdom {
    constructor() {
        super("Fish", 2, 2, "small")
    }

    bloodValue() {
        this.blood = "cold-blooded"
    }

    backbone() {
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