class AnimalKingdom {
    constructor(eyes, limbs, size) {
        if(this.constructor === AnimalKingdom)
        throw new Error("Class AnimalKingdom cannot be called or instantiated")

        this.eyes = eyes
        this.limbs = limbs
        this.size = size
    }

    coldBlooded(value) {
         
    }

    warmBlooded() {

    }

    withBackbone() {

    }

    noBackbone() {


    }

    animalDetails() {
        console.log("This animal has " + this.eyes + " eyes, " + this.limbs + " limbs, and is " + this.size + " in size")
    }
}

class Arthropoda extends AnimalKingdom {
    constructor(eyes, limbs, size) {
        super(eyes, limbs, size)

    }

}

class Fish extends AnimalKingdom {

}

class Amphibia extends AnimalKingdom {

}

class Reptiles extends AnimalKingdom {

}

class Aves extends AnimalKingdom {

}

class Mammals extends AnimalKingdom {

}

const animal = new Arthropoda(5, 6, "hfrr")
animal.animalDetails()