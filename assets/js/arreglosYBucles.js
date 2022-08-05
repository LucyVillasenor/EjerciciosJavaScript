/* 
----ARRAYS, ARREGLOS O MATRICES----
es un conjunto de dato que se pueden alamcenar
en una sola variable.

cuando tenemos una variable, la usamos para almacenar un UN solo dato.
En cambio, en un arreglo, guardarmos MUCHOS datos a manera de lista

Un array ya no es un tipo de dato primitivo, 
se considera un objeto porque es una estructura de datos


//Ejemplo 1
let nombre = "Felipe"; //Aquí se almacena un solo dato
array1 = ["Felipe","Ivonne","Briana", "Zabdiel","Alonso"];

//Ejemplo de un array con diferentes tipos de datos
array2 = ["Felipe", 23, true,null,undefined];

-- Formas de crear un array --

1.-Primera forma
    En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array 
    para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, 
    este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

    //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.
    var colores = new Array(3); 
    //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.
    var colores = new Array("rojo", "verde", "azul"); 




    Utilizando la palabra reservada "new Array" con la A mayuscula 

    var marcaDeColores = new array("PrismaColor", "Mapita","BlancaNieves", "Faber Castell", "Norma", "Crayola");

    2.-Segunda forma
    La segunda  forma se trata de crear el arreglo solousando corchetes []
    esta forma es la mas usada para crear arreglos en JS

    var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

    //Ejemplos de Arreglos
    listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
    console.log(listaDePerritos);

    //Ejemplo de Arreglo 2
    listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
    console.log(listaDelSuper)

    



*/

//2da forma de declarar arreglos
listaDePerritos = ["Chihuaha", "Calupoh", "Mestizos","Callejeros","Pug"];
console.log(listaDePerritos);

//---Práctica en equipo para declarar arrays
var peces = ["Pez globo","Pez Bruja","Pez Moly","Pez Angel"];
var bebidas = ["Chocomilk","Margaritas","Horchata","Jamaica","Cerveza"];
var comidaMexicana = ["Chilaquiles","Tacos","Tamales","Mole","Pozole"];
var pasaTiempos = ["Escuchar Musica","Patinar","Correr","Dibujar","Dormir","SAT"];
var paises = ["Mexico","Alemania","Costa Rica","Brasil","Suiza","Egpito"];

console.log(bebidas);
console.log(peces);
console.log(comidaMexicana);
console.log(pasaTiempos);
console.log(paises);
alert(bebidas);

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

/*Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, 
aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen 
los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. 
Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.*/


//Sintaxis arreglo asociativio

let propiedadDeMiComputadora = {
    marca: "ASUS",
    modelo: "JHSHSS",
    procesador: "Intel Core i7",
    ram: "16 GB",
    almacenamiento: "1 TB",
}

console.log(propiedadDeMiComputadora);
console.log("La RAM de mi computadora es de: ", propiedadDeMiComputadora["ram"]);
console.log("El tamaño de pantalla es de : ", propiedadDeMiComputadora["pantalla"]) //indefinido

//Ejemplo de una Ecommerce
let propiedadesDeMiComputadora = {
    marca: "Asus", //la marca es mi identificador, y "Asus" es mi valor
    modelo: "GL552JX",
    procesador: "Intel Core i7",
    ram: "16 GB",
    almacenamiento: "1 TB",
    precio: "15000"
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);

//Ejemplo de una Red Social
let publicacionRedSocial = {
    nombre: "Felipe",
    usuario: "@felipecontenis",
    fecha: "Agosto",
    likes: "5000",
    descripcion: "Esta es una bonita foto de lasagna",
    ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);


/*
-- METODOS DE LOS ARRAYS ---
En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

La sintaxis basica del metodo es: nombreDelArray.nombreMetodo(valorAModificar);

Podemos dividir estos metodos en 3: 

    - Metodos transformadores
    - Metodos accesores
    - Metodos repetitivos

*/

var arrayDeEjemplo =["Manzana", "Peras", "Mango", "Sandia", "Uva"];
 console.log("Este es nuestro arreglo original de 7 elementos", arrayDeEjemplo);


 //METODOS TRANSFORMADORES ACCEDORES

 //push(): agregar un elemento al final de arreglo
 arrayDeEjemplo.push("Pitaya");
 console.log("Agregamos la pitaya en nuestro arreglo de ejemplo: ",arrayDeEjemplo);

//pop(): Eliminar el ultimo elemento del arreglo
arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

//unshift(): Agregamos uno o mas elementos al principio dell arreglo
arrayDeEjemplo.unshift("Bananas","Tunas","Aguacate","Lichi");
console.log("Agregamos 4 elementos al principio del arreglo",arrayDeEjemplo);


//shift():Elimina el primer elemento del arreglo
arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo ",arrayDeEjemplo);

//sort(); Ordenar los elementos del arreglo y devuelve 
//el arreglo ya ordenado de forma ascendente
arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado: ", arrayDeEjemplo);

//reverse(): Invierte el orden de los elementos del arreglo y devuelve el arreglo invertido
arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);


/*slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, 
copiando el arreglo (no se modifica nada, sino que creamos una copia)*/
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9,-5);
console.log("Imprimimos la rebanada del arreglo original",saludo4);


/*
splice(): Modificar el arreglo en 3 formas distintas

- Eliminar elementos del arreglo
- Agregar elementos nuevos al arreglo
- Reemplazar elementos que ya existen en el arreglo


Sintaxis basica
splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);



var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length(): Nos permite saber el numero de elementos o la longitud del arreglo
console.log("Tenemos estos elementos del arreglo con una cadena de texto");

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada ", ensalada.join("Feli"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));


//Inestigar estos 3

//toString(): Nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());

//valueOf: Nos permite devolver el valor o valores del arreglo
console.log(dulces.valueOf(tamborines))

/*includes(): nos permite saber si un elemento existe o no en un arreglo,
no se basa en indice, se basa en los valores*/
console.log("Así podemos saber si un elemento esta dentro de nuestro arreglo", mezcla.includes("gansitos"));//true

console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false


/*METODOS REPETIDORES O ACCEDORES DE ARREGLOS

 SE CLONA EL ARREGLO Y NO SE HACEN MODIFICACIONES AL ARREGLO ORIGINAL*/


//filter(): REcorre el array y devuelve uno nuevo con elementos que cumplan la condición (Como un bucle))

var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Numeros del 1 al 10", numeros);

//filtraremos los datos del arreglo
var numeros1al15 = numeros.filter(numeros => numeros < 5);
console.log("Estos son los numeros que cumplen la condición al ser menores", numeros1al15);

var numeros6Al9 = numeros.filter(numeros => numeros >=6 && numero < 10);
console.log("Estos son los numeros que cumplen la condición al ser mayores que 5 y menores que 10", numeros6Al9);

/*map(): Recorrer el arreglo, modificar los elementos presentes en el y retornar esos valores modificados a uno nuevo
con la misma longitud que el arreglo original*/
var map = numeros.map(numeros => numeros *3);
console.log("Estos son los numeros multiplicados por 3: ", map);


//EJERCICIO IMPROVIADO TABLAS DEL 1 AL 10
var arregloBase = [1,2,3,4,5,6,7,8,9,10];
var tabla2 = arregloBase.map(arregloBase => arregloBase *2);
console.log("esta es la tabla del 2: ", tabla2);

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por 
cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, 
este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [3, 6, 8, 10, 12,];
let impar = 3;

var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);


/*
BUCLES O LOOPS

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. 
Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara 
ejecutandose hasta que la condicion devuelva un false

normalmente tenemos 3 ciclos:
    -while(mientras)
    -Do while (mientras)
    -For (para)

tenemos otras sentencias más especificas
    -For in(para lo que esta dentro) sirve para recorrer el arreglo y por cada uno de los
    elementos de este arreglo obtenemos LA POSICIÓN
    
    -For off sirve para recorrer un arreglo, y pot cada no de los
    elementos de este arreglo, obtenemos SU VALOR

    
*/

/*
    Sentncia WHILE (mientras)
    Esta sentencia nos va a permirir recorrer un bloque de código
    SIEMPRE que se cumpla una condición especifica, donde el resultado
    debe ser true.

    La estructura del while es:
    palabraReservada while(condición que tiene que ser true){
        //código a ejecutar
    }
*/


let numeroIncial = 1;
let valorLimite = prompt("Hola, por favor ingresa un nuúmero entero positivo que sea el limite");;

while(numeroIncial <= valorLimite){ //mientras el numero inciial sea menor o igual al limite, ejecutamos lo de abajo
    //si al dividir el numero inicial entre 2, el residuo es diferente a 0 (es impar)...
    if(numeroIncial % 2 != 0){
        console.log(numeroIncial); //imprimirmos el valor de la variable
    }
    numeroIncial++; //incrementamos de uno en uno nuestra variable
}

/*TAREA PRUEBA DE ESCRITORIO

numInicial=1
imprime en pantalla el prompt y recibe el valorLimite=4
mientras 4 sea menor o igual a 4 ejecutar
si el residuo de 4%2 es diferente de 0 imprimir 1
termina el if
se incrementa numeroInicial a 5
termina el while

*/

/* El bucle  do while nos sirve para ejecutar una sentencia especificada
hasta que la condición de aprobación se evalua como falsa.
La condición se evalua despues de ejecutar la sentencia, dando como resultado
que la sentencia especificada se ejecuta al menos una vez.

en pocas palabras, con el while preguntamos una vez, evaluamos la condicion
y ejecutamos la instrucción. con el do while, ejecutamos la instrucción al menos una vez
y luego preguntamos la condición


Estructura del DO WHILE

palabraReservada do{
    //codigo a ejecutar
}while(condicion);

*/


//ejemplo 1

let numerito = 0; //Declaramos la variable 0
do{
    console.log("El numero es: "+ numerito); //imprimimos
    numerito++; //aumentamos de 1 en 1 
}while(numerito<=10);//.... hasta que el  numero sea menor o igual a 10

//while  vs do while

console.log("While");

let numeroWhile = 0;//iniciamos en 0
while(numeroWhile < 5 ){ //mientras varible sea menor a 5
    numeroWhile++;//la incremento en 1
    console.log(numeroWhile); //la imprimo
}


console.log("Do While");

let numeroDoWhile = 0;//iniciamos en 0
do{
    console.log(numeroDoWhile){
        console.log(numeroDoWhile);
        numeroDoWhile++;
    }
}while(numeroDoWhile<5);


/* CICLO FOR 
Sirve para iterea cobre una sección de una variable. es diferente al while
por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos.

    Para eso tenemos tres elementos:
    -El valor incial de la variable que vamos a iterar (i=0)
    -La condición que tiene que cumplirse para que el bucle se siga ejecutando (i<5)
    -La operación que se realiza una vez que termina el bucle (i++)

    Estructura básica del for:
    for(valor inicial, condición, operación){

    }

*/

console.log("For");
for(let i=0; i<10; i++){
    console.log(i);
}

let animalitosDelBosque = ["ardillas", "conejos","venados","osos","Mariposas"];

//in: POSICIONES en el arreglo
for(posiciones in animalitosDelBosque){
    console.log(posiciones);
}

//of VALORES del arreglo
for(valores of animalitosDelBosque){
    console.log(valores)
}