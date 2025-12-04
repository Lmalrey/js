//Prompt y Alert

// let num=prompt("Introduce un numero")

// console.log(`Tu numero es ${num}`);

// num = parseInt(num);

// console.log(typeof num);

let num=prompt("Ingrese un numero");

num=parseInt(num);

for(i=1; i<=10; i++){
  console.log(`${num} x ${i} = ${num * i}`);
}