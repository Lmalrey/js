let age=17;

if(age>= 18){
  console.log("Puedes tener licencia de conducir");
}else{
  console.log("No puedes tener licencia de conducir");
}

let year=2025;

if ((year%4 == 0 && year%100 !== 0)|| (year%400 ==0 )){
  console.log(`${year} es un año bisiestro`);
}else{
  console.log(`${year} no es un año bisiestro`);
}


let people=5;
let budgetPerPerson= 3;
let total = people * budgetPerPerson;

if (total >= 50){
  console.log("Sale pizza mi gente hay plata");
}else if(total>=30){
  console.log("Nos alcanza para mcdonals mi gente");
}else if (total >= 20){
  console.log("Ni modo toca pollo mi gente");
}else{
  console.log("Cada quien para su casa que no hay plata");
}


const fecha= new Date(1993, 11, 3);

let month= fecha.getUTCMonth();
let day = fecha.getUTCDate();

console.log(month);
console.log(day);

if((month===1 && day >= 20)||(month===2 && day<=18)){console.log("Es Acuario");}
else if((month===2 && day >= 19)||(month===3 && day<=20)){console.log("Es Piscis");}
else if((month===3 && day >= 21)||(month===4 && day<=19)){console.log("Es Aries");}
else if((month===4 && day >= 20)||(month===5 && day<=20)){console.log("Es Tauro");}
else if((month===5 && day >= 21)||(month===6 && day<=20)){console.log("Es Geminis");}
else if((month===6 && day >= 21)||(month===7 && day<=22)){console.log("Es Cancer");}
else if((month===7 && day >= 23)||(month===8 && day<=22)){console.log("Es Leo");}
else if((month===8 && day >= 23)||(month===9 && day<=22)){console.log("Es Virgo");}
else if((month===9 && day >= 23)||(month===10 && day<=22)){console.log("Es Libra");}
else if((month===10 && day >= 23)||(month===11 && day<=21)){console.log("Es Escorpio");}
else if((month===11 && day >= 22)||(month===0 && day<=21)){console.log("Es Sagitario");}
else if((month===0 && day >= 22)||(month===1 && day<=21)){console.log("Es Capricornio");}


let grade=10;

if(grade >=11 ){
  console.log("You're approved");
  if(grade>=18){
    console.log("A++");
  }else if(grade>=16 && grade<=17){
    console.log("A");
  }else if(grade>=14  && grade<=15){
    console.log("B");
  }else{
    console.log("C");
  }
}else{
  console.log("You're not approved");
  console.log("D");
}

let dayOfTheWeek=6;

if(dayOfTheWeek==1){
  console.log("Es Lunes");
}else if(dayOfTheWeek==2){
  console.log("Es Martes");
}else if(dayOfTheWeek==3){
  console.log("Es Miercoles");
}else if(dayOfTheWeek==4){
  console.log("Es jueves");
}else if(dayOfTheWeek==5){
  console.log("Es Viernes");
}else if(dayOfTheWeek==6){
  console.log("Es Sabado");
}else if(dayOfTheWeek==7){
  console.log("Es Domingo");
}else{
  console.log("No es un dia de la semana");
}

switch(dayOfTheWeek){
  case 1: console.log("Es lunes");
  break;
  case 2: console.log("Es martes");
  break;
  case 3: console.log("Es miercoles");
  break;
  case 4: console.log("Es jueves");
  break;
  case 5: console.log("Es viernes");
  break;
  case 6: console.log("Es sabado");
  break;
  case 7: console.log("Es domingo");
  break;
  default: console.log("El numero escogido es invalido");
}