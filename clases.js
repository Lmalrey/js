// class Person{
//   constructor(nombre, apellido, edad, pais){
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.edad=edad;
//     this.pais=pais;
//   }
//   presentation(){
//     console.log(`Hello my name ${this.nombre} ${this.apellido} from ${this.pais}`);
//   }
// }

// let person1= new Person("luis", "Alcala", 23, "Venezuela");
// let person2= new Person("jose", "Alcala", 18, "Venezuela");

// console.log(person1.nombre, person1.apellido);
// console.log(person2);
// person1.presentation();

class Animal{
  constructor(name){
    this.name=name;
  }

  eat(){
    console.log(`${this.name} is eating`);
  }
  
  sleep(){
    console.log(`${this.name} is sleeping`);
  }

}

let animal1=new Animal("Perry");

class Dog extends Animal{
  constructor(name, breed){
    super(name);
    this.breed=breed;
  }

  bark(){
    console.log(`wau wau`);
  }

}

let perro1 = new Dog("Kiara", "husky");

perro1.bark();
perro1.sleep();
perro1.eat();

/**
 * Ejercicios
 *
 * Crea una clase llamada Circle que tenga una propiedad radio
 * y un método para calcular el área del círculo.
 *
 * Crea una clase llamada Person con propiedades como nombre,
 * apellido y edad, y un método para mostrar una introducción
 * personal.
 * Crea otras 3 clases que hereden de Person: Student, Teacher
 * y Administrator. Cada una debe tener propiedades y métodos
 * adicionales específicos.
 * - Student: grade, enrollment (array de materias), study() (método
 * que imprima un mensaje)
 * - Teacher: subject, salary, teach() (método que imprima un
 * mensaje)
 * - Administrator: department, manage() (método que imprima un
 * mensaje)
 */

class Circle{
  constructor(radio){
    this.radio=radio;
  }

  area(){
    return Math.PI * Math.pow(this.radio, 2);
  }

}

let circulo=new Circle(3);

console.log(circulo.area());

class Person{
  constructor(firstname, lastname){
    this.firstname=firstname;
    this.lastname=lastname;
  }

  presentation(){
    console.log(`Hello my name is ${this.firstname} ${this.lastname}`);
  }

}

class Student extends Person{
  constructor(firstname, lastname, grade, enrollment){
    super(firstname, lastname);
    this.grade=grade;
    this.enrollment=enrollment
  }
}