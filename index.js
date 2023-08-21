class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confronto(user2) {
    const { firstName, age } = this;
    const { firstName: altroFirstName, age: age1 } = user2;

    if (age < age1) {
      return `${firstName}  più giovane di ${altroFirstName}`;
    } else if (age > age1) {
      return `${firstName}  più vecchio di ${altroFirstName}`;
    } else {
      return `${firstName} ha la stessa età di ${altroFirstName}`;
    }
  }
}

const user1 = new User("Riccardo", "Ronca", 30, "Roma");
const user2 = new User("Alessio", "Patrizzi", 35, "Lecce");
const confronto = user1.confronto(user2);
console.log(confronto);

//-------------------------------------------------------------------

const pets = [];
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static owner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const submit = document.getElementById("aggPet");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  pets.push(newPet(petName, petOwner, species, breed));
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
});
