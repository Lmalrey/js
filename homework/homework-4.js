/**
 * Del siguiente array, imprimir:
 * - Nombres completos de cada persona.
 * - Ciudad de residencia de cada persona.
 * - Primer hobby de cada persona.
 * - La segunda persona en el array.
 * - La última persona en el array.
 * - Todas las personas que vivan en "Valencia".
 * - Todas las personas mayores de 25 años.
 * - Todas las personas que tengan "programming" como hobby.
 */

let persons = [
  {
    firstName: "Angélica",
    lastName: "Rivas",
    age: 25,
    hobbies: ["programming", "gamming", "reading manga", "suffering"],
    address: {
      country: "Venezuela",
      city: "Valencia",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Daniel",
    lastName: "Querales",
    age: 25,
    hobbies: ["programming", "gamming", "watching series"],
    address: {
      country: "Venezuela",
      city: "Caracas",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Kevin",
    lastName: "Singer",
    age: 32,
    hobbies: ["programming", "gamming", "math"],
    address: {
      country: "Venezuela",
      city: "Valencia",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Juan",
    lastName: "Padilla",
    age: 29,
    hobbies: ["coocking", "baking", "ham"],
    address: {
      country: "Venezuela",
      city: "Bolívar",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Yeferson",
    lastName: "Adames",
    age: 16,
    hobbies: ["dinosaurs", "Leage of Legends", "Valorant"],
    address: {
      country: "Venezuela",
      city: "Maracaibo",
      street: "Av. Bolívar",
    },
  },
];

for(person of persons){
  console.log(`Fullname: ${person.firstName} ${person.lastName}`);
}

for(person of persons){
  console.log(`City: ${person.address.city}`);
}

for(person of persons){
  console.log(`1rs Hobbie: ${person.hobbies[0]}`);
}

console.log(persons[1]);

console.log(persons[persons.length-1]);

console.log("");

for(person of persons){
  if(person.address.city == "Valencia"){
    console.log(person);
  }
}

console.log("");

for(person of persons){
  if(person.age > 25){
    console.log(person);
  }
}

console.log("");

for(person of persons){
  if(person.hobbies.includes("programming")){
    console.log(person);
  }
}