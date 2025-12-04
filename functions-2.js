/**
 * Pedir al usuario que ingrese una serie de calificaciones
 * separadas por comas a través de un prompt y luego calcular:
 * - La cantidad de calificaciones ingresadas.
 * - El promedio de las calificaciones.
 * - La calificación más alta y la más baja.
 * - Mostrar los resultados en una alerta.
 *
 * Pista: Se deberá convertir la cadena ingresada en un array.
 */

/**
 * let calificaciones = prompt(`Ingrese las calificaciones obtenidas separadas por comas`);

  function procesarCalificaciones(string=""){
    let array=string.split(',');
    for(let i=0; i<array.length; i++){
      array[i]=parseInt(array[i]);
    }
    let prom= califProm(array);
    let {max, min} = max_min(array); 
    
    alert(`
      Cantidad de calificaciones: ${array.length}
      Promedio de calificaciones: ${prom}
      Maxima calificacion: ${max}
      Minima calificacion: ${min}
      `);

  }

  function califProm(array=[]){
    let prom=0;
    for(let i=0; i<array.length; i++){
      prom += array[i];
    } 
    prom = prom / array.length;
    return prom;
  }

  function max_min(array=[]){
    let max=0, min=1000;
    for(let i=0; i<array.length; i++){
      if(array[i]>max){
        max=array[i];
      }
      if(array[i]<min){
        min=array[i];
      }
    }
    return {max, min};
  }

  procesarCalificaciones(calificaciones);

 * 
 */
  
/**
 * 2
 * Pedir al usuario que ingrese un número a través de un prompt
 * (validando que sea un valor válido) y luego mostrar en una alerta
 * todos los números primos menores o iguales al número ingresado.
 *
 * Pista: Un número primo es aquel que solo es divisible por 1 y
 * por sí mismo.
 */

//   function isPrime(num) {
//   if (num <= 1) return false;

//   if (num === 2) return true;

//   if (num % 2 === 0) return false;

//   for (let i = 3; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// function main_primes() {
//   let num = prompt("Ingrese un número:");
//   let numbers = [];

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       numbers.push(i);
//     }
//   }
//   alert(`Los números primos o iguales a ${num} son: ${numbers}`);
// }

// main_primes();

/**
 * Crear una función que simule el lanzamiento de dos dados.
 * La función deberá ejecutarse hasta que ambos dados muestren el
 * mismo número (es decir, se obtenga un par).
 *
 * Al finalizar, mostrar en una alerta cuántos lanzamientos
 * fueron necesarios para obtener el par.
 */


function throwDice(){
  let dice1=0, dice2=0, tries=0;
  do{
    dice1=Math.floor(Math.random()*6);
    dice2=Math.floor(Math.random()*6);
    tries++;
    console.log(`Intento: ${tries}`);
    console.log(`Dado 1: ${dice1}`);
    console.log(`Dado 2: ${dice2}`);
  }while(dice1 != dice2)

    alert(`Intentos necesarios: ${tries}`);
}

throwDice();