/* console.log("hola mundo");

// Variables
// let numero = 0;
// numero = "cadena";

// Constantes
// const unico = "info";
// unico = 0;
// console.log(unico);

function saludar(nombre) {
  alert("hola");
  return true;
}

const saludo = nombre => alert(`Hola ${nombre}`);
saludo("Andrea");

// Desestructuración
const arreglo1 = ["Andrea", "Cortes"];
let [nom, app] = arreglo1;
alert(nom);

const objeto = {
  nombre: "Andrea",
  edad: 21,
  carrera: "SIS"
};
let { nombre, carrera, edad } = objeto;
alert(carrera);

const usuarios = [
  {
    usuario: "test1",
    email: "test1@gmail.com",
    semestres: [1, 2, 3]
  },
  {
    usuario: "test2",
    email: "test2@gmail.com",
    semestres: [1, 3, 5]
  },
  {
    usuario: "test3",
    email: "test3@gmail.com",
    semestres: [5, 8]
  }
];

let [dato1, dato2, dato3] = usuarios;

const mostrar = (usuarioData) => {
  let { usuario, email, semestres } = usuarioData;
  let [s1, s2, s3] = semestres;
  alert(`${usuario}, ${email}, ${s1}-${s2} ${semestres.length > 2 ? s3 : ''}`);
};

mostrar(dato1);
mostrar(dato2);
mostrar(dato3);

// Operador ternario 
if ((2 + 2) > 4) {
  console.log("Es mayor a 4");
} else {
  console.log("Es menor o igual a 4");
}

const resultado = (2 + 2) > 4 ? "Es mayor a 4" : (2 + 2) === 4 ? "Es igual a 4" : "Es menor a 4";
console.log(resultado);

// Parámetros rest y spread

// Rest: empaqueta variables o datos en un arreglo
const funcionDatos = (...datos) => {
  // Spread: desempaqueta un arreglo
  console.log(...datos);
};

funcionDatos("Andrea", "test", "nombre");

const frutas = ["mango", "sandia", "manzana"];

// Desempaquetado de arreglo y creación de uno nuevo a partir del arreglo frutas
const frutas_verduras = [...frutas, "calabaza", "aguacate"];
console.log("Arreglo original:", frutas);
console.log("Arreglo copia:", frutas_verduras);

frutas_verduras.push("zanahoria");
console.log("Arreglo original:", frutas);
console.log("Arreglo copia:", frutas_verduras);

// Función map: permite iterar el contenido de un arreglo
frutas_verduras.map((dato) => {
  console.log(dato);
});

// Crear un nuevo arreglo modificado con map 
let mayusculas = frutas_verduras.map((dato) => {
  return dato.toUpperCase();
});

console.log(frutas_verduras);
console.log(mayusculas);

usuarios.map((data) => {
  let { usuario, email, semestres } = data;
  console.log(`${usuario}, ${email}`, ...semestres);
});

//funciones con argumentos por defecto
const datos_persona = (nombre ="no",apellido = "no",nacionalida = "peruano",edad ="sin edad")=>{
  console.log( `
    nombre: ${nombre},
    apellido: ${apellido},
    nacionalida: ${nacionalida},
    edad: ${edad}  
    `);
}

datos_persona();
//datos_persona ("Andrea", "Cortes", "mexicana", 21); */



/* class Persona{
  #valorPrivado = "secreto";
  #nombre;
  constructor(nombre){
    this.nombre = nombre
    this.#valorPrivado = "otro dato"
  }
  mostrarDatos(){
    let saludo = "Hola";
    console.log(`
      Nombre: ${this.#nombre}
      ${saludo}

      `)
  }
  #editarNombre(nombre){
    this.#nombre = nombre;
  }
  validarNombre(nombre){
    if(nombre != ""){
      this.#editarNombre(nombre);
    }else{
      console.log("Debes ingresar un nombre!");
    }
  }

  getNombre(){
    return this.#nombre;
  }
  getValorPrivado(){

  }
}

let persona1 = new Index("Andrea");
//console.log (persona1.nombre);
persona1.mostrarDatos();
//persona1.nombre = "test"
persona1.validarNombre("test");
persona1.getNombre();
 */

/* import Persona from "./Persona.js";

let persona1 = new Persona("Andrea");
persona1.mostrarDatos(); */
