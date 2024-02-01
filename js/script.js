const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");


// ============================================== CHALLENGE 1 PART A ================================================ //
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

const sora = createPet("Sora", "ferret");

const clover = createPet("Clover", "rabbit");

const baxter = createPet("Bacter", "hamster");

const cleo = createPet("Cleo", "rat");

const francine = createPet("Francine", "turtle");

//console.log(sora, clover, baxter, cleo, francine);

clover.sleep(); // createPet is not needed to cause the method to act
baxter.play(); // createPet is not needed to cuase the method to act

console.log(clover, baxter);

// ============================================== CHALLENGE 1 PART B ================================================ //

clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

console.log(allPets);

const showPets = function (petArray) { 
    pets.innerHTML = ""; // This will clear your list whenever showPets is run, so that you can update it with fresh info.
    
    for (let pet of petArray) { // pet could literally be any animal, pet is like the access to the key-values, and petArray is like the access to a specific animal in showPets.
        let status = "ready to play"; // Instead of coding an else value, we can pre-assign a value that will only change if the "if statement" conditions are met.
        if (pet.isTired >= 7) {
            let status = "sleeping";
        };

        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li); // for the append no quotation marks are necessary.

    }
};

statusButton.addEventListener("click", function () {
    showPets(allPets); // Here showPets is a function inside of a function being called only if the button is clicked. All pets is an Array, and will become an individual object of the array once it enters the (for of loop)
    }
);

