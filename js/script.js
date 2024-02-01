const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,       // the key and value must be duplicates in order for this to work properly
        species: species, // the key and value must be duplicates in order for this to work properly
        isTired: 5,
        
        sleep: function () {
        console.log(`${this.name} needs a nap! Zzz..`);
        this.isTired = 1;
        },

        play: function () {
            if(this.isTired === 10) {
                console.log("Too tired to play");
                this.sleep ();
            } else {
                console.log(`Yay ${this.name} loves to play!`);
                this.isTired += 1;
            };
        }
    }
    return pet;
};

const sora = createPet("Sora", "Ferret");

const clover = createPet("Clover", "Rabbit");

const baxter = createPet("Bacter", "hamster");

const cleo = createPet("Cleo", "rat");

const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

clover.sleep(); // createPet is not needed to cause the method to act
baxter.play(); // createPet is not needed to cuase the method to act

console.log(clover, baxter);