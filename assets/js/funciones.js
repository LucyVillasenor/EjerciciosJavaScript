//Mejores practicas

//Itentar que las funciones sean menos de 100 lineas

//1. Utilizar keyword function
//2. Nombrar nuestra funcion[]
//3. Utilizar () y abrir y cerrar la función {}
var nombre= "Lucy Villaseñor";

function myFunction(){
    //Aquí va el cuerpo de la función
    console.log("Hola Mundo");
}

myFunction();

function myName(){
    let name = "Lucy Villaseñor";
    console.log(name);
}
//myname();
//Variable con scope local
//las funciones scope necesitan ser declaradas primero y luego se mandda a llamar
function scopeFunction(){
    let local = "Esto se encuentra dentro de la función scopeFunction"
    console.log(local)
}

function globalScope(){
    console.log(nombre);
}

//las funciones hoisting no necesitan ser declaradas antes de mandarlas llamar
//pueden ser mandadas llamar y luego declararlas
//para utilizar var: tiene que que ser declarada primero para se utilizadda

//funciones estaticas o constantes
const miNombre = "Lucy";
function fiuFiu(x){
    console.log(x);
}

fiuFiu(miNombre);
fiuFiu("Lucy :D");

//funcion con mas de un paramatetro
function dosParametros(x,y){
    console.log(x);
    console.log(y);
}
//Invocacion con 2 parametros aleatorios
dosParametros("Hola","Mundo");

function tresParam(x,y,z){
    console.log(x + y+ z);
}

tresParam("Hola", "Soy", "Lucy");

//OUTPUT
function out(){
 let x = "Hola";
 return x;
}
//podemos recibir el dato de forma directa
//console.log(out());

//podemos guardar el output en una variable
//y la podemos utilizar despues
const receive = out();

//eee
console.log(receive);

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));
