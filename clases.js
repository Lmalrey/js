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
  constructor(firstname, lastname, grade, enrollment=[]){
    super(firstname, lastname);
    this.grade=grade;
    this.enrollment=enrollment
  }

  study(){

    let counter=0
    for(let subject of this.enrollment){
      counter++;
    }
    console.log(`${this.firstname} ${this.lastname} esta cursando ${this.enrollment[Math.floor(Math.random()*counter)]}`);
  }

}

let estudiante= new Student("Luis", "Manuel", "5to año", ["Matematica", "Castellano", "Ingles"]);

console.log(estudiante);
estudiante.study();

class Teacher extends Person{
  constructor(firstname, lastname, subject, salary){
    super(firstname, lastname);
    this.subject=subject;
    this.salary=salary;
  }

  teach(){
    console.log(`Enseñando ${this.subject}`);
  }

}

let profesor= new Teacher("Pedro", "Navaja", "Matematica", 900);

console.log(profesor);
profesor.teach();

class Administrator extends Person{
  constructor(firstname, lastname, department){
    super(firstname, lastname);
    this.department=department;
  }

  manage(){
    console.log(`Administrando el departamento de ${this.department}`);
  }
}

let administrador=new Administrator("Armando", "Casas", "Administracion");

console.log(administrador);
administrador.manage();


/**
 * Ejercicio Estelar
 *
 * Crear una clase llamada TaskManager que permita gestionar una
 * lista de tareas. La clase debe tener los siguientes métodos:
 * - add(task): Agrega una nueva tarea a la lista.
 * - remove(task): Elimina una tarea de la lista.
 * - get(): Devuelve todas las tareas en la lista.
 * - markAsCompleted(task): Marca una tarea como completada.
 *
 * Cada tarea debe ser un objeto (clase Task) con las siguientes
 * propiedades:
 * - title: Título de la tarea.
 * - completed: Estado de la tarea (completada o no).
 */

class Taskmanager{
  constructor(){
    this.list=[]
  }

  add(task){
    this.list.push(task);
    console.log(`
      Se ha añadido la tarea:
      ${task.title}
      `);
  }

  remove(task){
    let index=this.list.indexOf(task);
    this.list.splice(index, 1)
  }

  get(){
    console.log("Lista de tareas");
    let 
    for(let key in this.list){
      console.log(`${parseInt(key)+1} - ${this.list[key].title} - Completed: ${this.list[key].completed}`);
    }
  }
  completeTask(task){
    let index=this.list.indexOf(task);
    this.list[index].completed=true;
  }

}

class Task{
  constructor(title){
    this.title=title;
    this.completed=false;
  }
}

let tarea1= new Task("Buscar las hallacas");
let tarea2= new Task("Comprar el pan de jamon");
let tarea3= new Task("Comprar el asado negro");

let manager=new Taskmanager();

manager.add(tarea1);
manager.add(tarea2);
manager.add(tarea3);

manager.remove(tarea3)

manager.completeTask(tarea1);
manager.get();