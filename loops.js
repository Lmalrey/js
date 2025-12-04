// While Loop

turn=0

while(turn < 5){
  console.log(`Vueltas: ${turn}`);
  console.log("Dale vuelta al lapiz en el sacapunta");
  turn++;
}
console.log("Lapiz afilado");


// let num=7, i=1;

//  while(i<11){
//    console.log(`${num} x ${i} = ${num * i}`);
//    i++;
//  }

// Do-While loop

// let num=7, i=1;

//  do{
//    console.log(`${num} x ${i} = ${num * i}`);
//    i++;
//  }while(i<11)

// For loop
/**
 let num=5;
 for(i=1; i<=10; i++){
   console.log(`${num} x ${i} = ${num * i}`);
 } 
 */

/**
 * Excersise 1: Create a script that prints if an
 * number is even or odd from 1 to 20.
 

for(i=1; i<=20; i++){
  if(i%2==0){
    console.log(`${i} - even`);
  }else{
    console.log(`${i} - odd`);
  }
}
  */

/**
 * Excersise 2: Create a script capable of sum every value of a variable and show the final result after 100 iterations.
 */

let sum=0;

for(i=1; i<=100; i++){
  sum += i;
}

console.log(sum);

/**
 * Practice.
 * Create a script that counts numbers from 20 to 0 and shows a custom message
 * if the number is multiple of 5.
 */


for(i=20; i>0; i--){
  if(i%5==0){
    console.log(`${i} - es multiplo de 5`);
  }else{
    console.log(`${i} - no es es multiplo de 5`);
  }
}