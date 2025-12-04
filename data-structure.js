/**
 * Arrays Module
 */

let fruits=["apple", "pear", "orange", "banana"];
console.log(fruits);

for(let i=0; i< fruits.length; i++){
  console.log(fruits[i]);
}

/**Array methods */
console.log("Array methods");
fruits.push("mango");

for(let i=0; i< fruits.length; i++){
  console.log(fruits[i]);
}

fruits.pop();
console.log("");

for(let i=0; i< fruits.length; i++){
  console.log(fruits[i]);
}
//Quitar el primer elemento del arreglo
fruits.shift();
console.log(fruits);

//Agregar un elemento al inicio del arreglo
fruits.unshift("grape");
console.log(fruits);

// Quitar elementos del arreglo (posicion de inicio, cantidad de elementos a quitar)
fruits.splice(0, 1);
console.log(fruits);

fruits.push("peach");
fruits.push("Kiwi");

console.log(fruits);

//Crea un subarreglo a partir de otro indicando donde comienza y donde termina
let frutas=fruits.slice(2, fruits.length+1)

console.log(frutas);

console.log(fruits.indexOf("peach"));

console.log(fruits.includes("pear"));

for(let fruit of fruits){
  console.log(fruit);
}

console.log("");
fruits.forEach(fruit => {
  console.log(fruit);
});

let person = {
  nombre: "Luis",
  apellido: "Alcala",
  edad: 23,
  hobbies: ["Dibujar", "Bailar", "Dormir"],
  direccion:{
    pais: "Venezuela",
    ciudad: "Maturin",
    calle: "Av. casanova"
  }
}

console.log(person);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.direccion);
console.log(person.direccion.pais);

person.edad=24;
person.hobbies[2]="ver anime";
person.email="alcalareyesluis@gmail.com";
delete person.direccion.calle;

person.hobbies.push("Jugar videojuegos");

console.log(person);
console.log(person.edad);
console.log(person.hobbies);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log("");

//for ... in loop

for(let key in person){
  console.log(key + " : " + person[key]);
}

for(let key in person.direccion){
  console.log(key + " : " + person.direccion[key]);
}

for(let hobbie of person.hobbies){
  console.log("Hobbie: " + hobbie);
}