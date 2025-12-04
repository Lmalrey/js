let saldo=0, cantidad=0, operacion="", option="";

do{
  do{
    operacion=parseInt(
      prompt(`
        Elija una opción:
        1. Depositar
        2. Retirar
        3. Ver saldo
        4. Finalizar
        `)
    )
    switch(operacion){
      case 1:
        cantidad=parseFloat(
          prompt("Por favor, ingrese el monto que desea depositar")
        )
        if(cantidad == 0){
          alert("ahh te crees gracioso")
        }else if(cantidad<0){
          alert("No puedes depositar un monto negativo")
        }
        else{
          saldo+=cantidad;
          alert(`El deposito ha sido realizado correctamente, su saldo es de bs ${saldo}`);
          cantidad=0;
        }
      break;
      case 2: 
        cantidad=parseFloat(
          prompt("Por favor ingrese el monto que desea retirar")
        )
        if(cantidad > saldo){
          alert("El monto a retirar es superior a su saldo actual")
        }else if(cantidad < 0){
          alert("No puede retirar un saldo negativo")
        }
        else{
          saldo -= cantidad;
          alert(`Se ha retirado correctamente la cantidad de bs ${cantidad}`);
          cantidad=0
        }
      break;
      case 3:
        alert(`Su saldo es de bs ${saldo}`)
      break;
    }
  }while(operacion < 1 || operacion > 4)

    if(operacion!=4){
      option=prompt("Desea realizar otra operación");
    }else{
      option="n"
    }

}while(option == "y" || option == "Y")