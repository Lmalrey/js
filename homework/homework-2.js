let a=10, b=25, c=15;

if (a>b && a>c){
  console.log("a is the larguest variable");
}else if(b>a && b>c){
  console.log("b is the larguest variable");
}else{
  console.log("c is the larguest variable");
}

let l1=9, l2=10, l3=11;

if (l1==l2 && l1==l3){
  console.log("Es un triangulo equilatero");
}else if(l1==l2 || l2==l3 || l1==l3){
  console.log("Es un triangulo isoceles");
}else{
  console.log("Es un triangulo escaleno");
}

const userName="Luis";
const password="12345678";

let userNameInput="Lui";
let passwordInput="1234567";

if (userName===userNameInput && password===passwordInput){
  console.log(`Bienvenido ${userName}`);
}else if(userName === userNameInput && password != passwordInput){
  console.log("La contraseña ingresada es incorrecta");
}else{
  console.log("El usuario no esta registrado en el sistema, para ingresar debe crear una cuenta");
}

let income=100000;
let tax=0

if(income <= 1000){
  console.log(`The tax to be paid is $${tax}`);
}else if(income > 1000 && income <= 3000){
  tax=income*0.1;
  console.log(`The tax to be paid is $${tax}`);
}else if(income>3000 && income <=6000){
  tax=income*0.2;
  console.log(`The tax to be paid is $${tax}`);
}else{
  tax=income*0.3;
  console.log(`The tax to be paid is $${tax}`);
}