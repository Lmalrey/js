function greet(name="anonymous"){
  console.log(`Hello ${name} from a function`);
}

greet();

function sum(a=0, b=0){
  let resultado = a+b;
  return resultado;
}

let sumResult=sum(15, 45);

console.log(sumResult);

function superSaludo(nombre="john", apellido="Doe"){
  console.log(`Saludo ${nombre} ${apellido} eres un crack, maquina, idolo`);
}

superSaludo("Luis", "Alcala");

function IMCCalc(peso=0, altura=0){
  return (peso / Math.pow(altura, 2)).toFixed(1)
}

let imc=IMCCalc(70, 1.75);
console.log(imc);

function isaNumber (num=0){
  if(typeof num == "bigint" || typeof num == "number"){
    return true;
  }else{
    return false;
  }
}

let boolean= isaNumber("xd");
console.log(boolean);