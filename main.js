// let num1=3;
// let num2=5;
// let age=23;
// let bol1=true;
// let bol2=false;
// let bol3=true;
// let pi=Math.PI;
// let null_var=null;


// console.log(num1 * num2);

// console.log(`Hola mundo, tengo ${age} años`);

// let result1= bol1 && bol2;
// console.log(result1);

// let result2=bol1 || bol2;
// console.log(result2);

// let result3=bol1 && bol3;
// console.log(result3);

// console.log(`¿Es ${num1} mayor que ${pi}? => ${num1>pi}`);

// num1 ++;

// console.log(`¿Es ${num1} mayor que ${pi}? => ${num1>pi}`);

// console.log(typeof(num1)== 'number');
// console.log(typeof(bol1));
// console.log(typeof null_var);


/**
 * Ejercicios de JavaScript
 */

/**
 * 1. Declare two variables, a = 10 and b = 3.
 * Calculate the remainder when a is divided by b and store it
 * in a variable called remainder.
 */

// let a=10;
// let b=3;

// remainder= a % b;
// console.log(remainder);

/**
 * 2. Declare a variable age = 25.
 * Write an expression using a comparison operator to check if age
 * is greater than or equal to 18. Store the result in a variable calle
 * isAdult.
 */

// let age=25;
// let isAdult = age>= 18;

// console.log(isAdult);

/**
 * 3. Declare a boolean variable isRaining = false.
 * Use the logical NOT operator (!) to reverse its value and store
 * the result in shouldStayInside.
 */

// let isRaining=false;
// let shouldStayInside=!isRaining;
// console.log(shouldStayInside);

/**
 * 4. Declare a variable counter = 5. Use the post-increment operator (++)
 * once. What is the value of counter after the operation?
 */

// let counter = 5;
// counter++;
// console.log(counter);

/**
 * 5. A configuration setting is valid if its status is a boolean OR its level
 * is a number greater than 50. Declare status = null and level = 75. Write a
 * single expression to check the validity and store the boolean result in
 * isValidConfig
 */

// let estatus=null;
// let level=75;
// let isValidConfig= typeof estatus=='boolean' && level > 50;

// console.log(isValidConfig);

/**
 * 6. Calculate the result of the expression: (5 * 4) + (20 / 5) - 3
 * WITHOUT executing the script.
 */

// console.log("El resultado de la expresión: (5 * 4) + (20 / 5) - 3 = 21");

/**
 * 7. Declare numString = "5" and numInt = 5. Compare them first using the
 * loose equality operator (==) and then using the strict equality operator
 * (===). Store the results in looseResult and strictResult.
 */

// let numString= "5";
// let numInt=5;

// let looseResult= numString==numInt;
// console.log(looseResult);

// let strictResult= numString===numInt;
// console.log(strictResult);

/**
 * 8. Determine the final value of x after the following operations:
 * let x = 10;
 * x = x * 2 + 5 % 3;
 * WITHOUT executing the script.
 */

// console.log(`
//   El resultado de realizar las siguientes operaciones:
//   let x = 10;
//   x = x * 2 + 5 % 3;

//   x=22;
//   `);

/**
 * 9. Determine if an integer year = 2024 is a leap year using only operators.
 * Other forms of code are not allowed. :)
 */

  // let year=2024;
  // isLeepYear= year%4==0;

  // console.log(`¿El año ${year} es año bisiestro? - ${isLeepYear}`);