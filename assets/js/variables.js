// este es un comentario de una sola linea
/* comentario de 
varias lineas*/

// una alerta es una ventana de dialogo que muestra un mensaje
// alert("Hola Lucy excelente día, lograste conectar el js")

//Alerta en consola
//console.log("Estoy Vivo!!")

/*pedimos la información al usuario con un prompt, la guardamos en una variable llama
nombre para mostrarla despues*/
nombre= prompt("¿Cómo te llamas?");

//usamos la  funcion console.log para mostrar lo que se guardo en la variable
console.log(nombre)

base = prompt("Ingrese la base del trinagulo");
altura= prompt("Ingrese la altura del triangulo");
areaTriangulo = (base*altura)/2;
alert("El area es:" + areaTriangulo);
console.log("El area es:" + areaTriangulo);


//Mejores practicas para declarar variables

//Seguir un estandar personal

/*camelCase: Utilizar mayusculas en la mitad de nuestras  variables
Ejemplo: variableTriangulo, miNombre, miEdad, miDireccion
*/

/*Palabras reservadas
No usar palabras reservadas para declarar una variable
Ejemplo: if, return, true, false, for, while, etc.
*/

/*Pueden contener numeros, letras,guion bajo, simbolo de dolar
Ejemplo:
var a;
var a1;
var a_Nombre;
var a$Direccion
*/

//Declaración de variables:

//Type Number
var edad = 24;
var peso = 80;
var astigmatismo = 1;

//Typpe Boolean
var ciego = true;
var hambre = false;
var bateria = false;

//Type String
var nombre = "Lucy Horta";
var ciudad = 'Cd. Guzmánn';
var nacionalidad = `Mexicana`;

//Type Null
var herido = true;
var briamonestaciones =  null;

//variables con un mismo valor
var x,y, z = 4;

//Variables indefinida, sin valor
var xx,yy,zz;

//Tarea variables indefinidas en una sola linea:
var cereal, leche, pan, fruta, carne;

//typeOf(); nos indica el tipo el tipo de dato de la variable que se coloque en los parentesis
var a = 2;
typeof(a);
//number

var b = "2";
typeof(b);
//string

var c = true;
typeof(c);
//boolean

var d = null;
typeof(d);

//  isNaN() es una función que nos permite verificar si un dato
// es o no es un número


//Nan es un tipo de dato en JS
isNaN(NaN);
//true

var e = NaN;
isNaN(e);
//true

typeof(e);
//number

//3 formas de declarar variables depende de la funcion, es la que vas a utilizar
var a = 1;
let a = 1; //nos permite modificar su valor actual sin restricciones 
const a = 1; //constante, variable con un dato que no va a cambiar

//declarar arrays constantes
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const carros = ["BMW", "Volvo", "Mercedes", "Ford"];
//combinación de diferentes tipos de datos en un array
const combinacion = [1, "Hola", null, "5"];



