/*

Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML 
  de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite 
obtener los ultimos tweets del usuario, o la de GitHub que nos 
permite obtener la informacion de los repositorios de una cuenta.


Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage



FETCH API

-Asincronismo(Cuando le pido una torta al señor de las tortas
con mucho tiempo de anticipación) (solo se puede ejecutar una instrucción a la vez)
(se ejecuta un proceso a la vez)


-Sincronismo(Cuando le pid una torta al señor de las tortas
    para ya, porque tengo poco tiempo para comer)

    JavaScript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo. 
    - Single Thread
    - Operaciones de entrada y salida
    - Bloqueo
    - No bloqueo


    Ejemplo de aeropuerto:

    -Pista de aterrizaje = hilo o thread
    -Input = cuando un avion va aterrizar
    -Output = cuando el avion tiene que despegar
    -Manejador de eventos = la torre de control

    Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.


*/
//Ejemplo de JavaScript Sincrono
console.log ("Inicio Sincrono"); //1
function dosSincrono (){
    console.log("Dos");
}
function unoSincrono(){ 
    console.log("Uno");//2
    dosSincrono(); //3
    console.log("Tres"); //4
}
unoSincrono();
console.log("Fin de Sincrono");//5

//Cual es la salida de este codigo



//Ejemplo de JavaScript Sincrono
console.log ("Inicio Sincrono"); //1
function dosSincrono (){
    console.log("Dos");
}
function unoSincrono(){ 
    console.log("Uno");//2
    dosSincrono(); //3
    console.log("Tres"); //4
}
unoSincrono();
console.log("Fin de Sincrono");//5

//Cual es la salida de este codigo?: 1, 2, 3



//Ejemplo de JS asincrono
console.log ("Inicio de Asincrono");//1
function dos(){ //Se pone en espera 2 segundos
    setTimeout(function(){
        console.log("Dos");//5
    }, 2000);
}
function uno(){
    setTimeout(function(){
        console.log("Uno");
    }, 0); //4
    dos();
    console.log("Tres"); //2
}
uno();
console.log("Fin de Asincrono");//3
//Cual es la salida de este codigo?: 3, 1 y 2


/*
Ejemplos de tareas asincronas

- Fetch a una URL para obtener un archivo JSON
- Tareas programadas con setTimeout
- Spotify, al momento de reproducir un .mp3


Mecanismos asincronos en JAVASCRIPT

Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

    - Callbacks
    - Promises
    - Async/Await

Promesas (promises)

Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas. 
La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, 
que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto 
el cual puede estar disponible AHORA o en el FUTURO. Aunque esta operacion puede finalizar exitosamente o fallar,
la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

Las promesas tienen 3 estados posibles:
    - Pending: Estado inicial, cuando se crea la promesa. 
    - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
    - Rejected: Cuando la operacion asincrona falla (reject)
    
Nuestras promesas tiene algunos metodos:

    - then(function resolve): Ejecuta la funcion resolve cuando la promesa se cumple
    - catch(function resolve): Ejecuta la funcion reject cuando la promesa no se cumple.
    
    - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
    - finally(function end): Ejecutar la funcion end si se cumple o no la promesa.

//Ejemplo archivos de Felipe

- Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
- Fullfilled: Cuando Felipe los envia
- Rejected: Cuando no los envia o cuando avisa que no los puede enviar.


    */

//Ejemplo archivos de 
//Ejemplo de los archivos 
//Promesa de AMOR donde nos dejan en visto un ratito, y luego nos aceptan la invitacion
// var promesaDeAmor = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         resolve ("Si quiero salir contigo, te amo");
//     }, 5000);
// });
// //Ejemplo de promesa para ir por unas tortas
// let decision = "No";

// const promesaTortas = new Promise((resolve, reject) => {
//     if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
//     resolve(decision);
// }
// );
// console.log(promesaTortas);


/*

Fetch API

Es el nombre de una nueva API (nativa) para JS con la cual 
podemos realizar peticions HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar

const solicitud = fetch('la url que vamos a consultar')
//Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa

*/

fetch('https://pokeapi.co/api/v2/pokemon/charmander')//realizamos la petición
    .then(datos=>{ /* Cuando te conectes al servidor, ejecutamos la siguiente función*/
        return datos.json();/*Traeme todos los pojemon y como se que los en texto, yo los convierto
        a formato JSON */
    })
    .then(info=>{ /*cuando la promesa se resuelve, entonces ejecutamos
        esta funcion. Usamos el metodothen para obtener la respuesta a la promesa y guardarla en una variable
        llamada info. Gracias a esta variable, puedo almacenamr la info de mi pokemon
        y sacar de ahí los datos que necesite*/
        console.log("El nombre de nuestro Pokemon es: ",
        info.name,"y su numero es: ", info.id);
    });

    /*
    Cuando hablamos de la API

    */


    function fetchPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)/* la peticiona la url,
        donde usamos el parametro id para obtener la información del pokemon */
        .then(respuesta => respuesta.json()) //almacenamos la respuesta en un formato.json
        .then(dato => console.log(dato))//imprimimos la respuesta en consola
    }
    fetchPokemon(420);



//Solicitud GET 
fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
.then((datos) => {
  //cuando la promesa es resuelta, entonces ejecutamos esta funcion
  return datos.json(); //convertimos la respuesta a un formato JSON
})
.then((info) => {
  //cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo .then para obtener la respuesta de la promesa y guardarla en la variable info. Gracias a esto podre obtener la informacion que queremos.
  console.log(
    "El nombre de nuestro producto es:",
    info.title,
    " y su precio es: ",
    info.price
  ); //imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON, y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
});

/* APIS DE ALMACENAMIENTO WEB


la API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes

- almacenamiento local
- almacenamiento de sesiones

Tanto el almacenamiento local como el de sesiones proporcionan una area privada para sus datos, esto quiere decir que otros sitios web no pueden acceder a esta informacion


Algunas caracteristicas que comparten el local y el session storage son:

    - La capacidad (5Mb a diferencia de los 4Kb de las cookies)
    - La informacion es almacenada en pares clave/valor, por lo que se puede usar como si fueran variables.
    - El almacenamiento web solo es accesible en el navegador, no se envia al servidor como lo hacen las cookies.
    

ALMACENAMIENTO LOCAL (LocalStorage)

La informacion almacenada con localStorage se guarda indefinidamente 
hasta que sea eliminada mediante codigo o bien borrada desde el navegador.

El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y
puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, 
tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, 
ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.


ALMACENAMIENTO DE SESION (SessionStorage)


La informacion que guardamos en sessionStorage solo se guarda durante la sesion del navegador 
(es decir, se elimina cuando se cierra el navegador). Si tenemos varias ventanas o pestañas abiertas, 
la informacion se guarda en cada una de ellas, asi que si cerramos una ventana, la informacion se borra de la misma.

Como accedemos al almacenamiento?
-window.LocalStorage
-window.sessionStorage

Guardar datos (localStorage.setItem(key,value)

//La sintaxis para guardar datos en un localStorage es: 
localStorage.setItem(key, value);, donde key es la clave (o el identificador) y value es el valor que queremos guardar.

*/
//referirnos al tipo de memoria que vamos acceder, poner un . y   
// localStorage.setItem("Nombre","Lucia");
// localStorage.setItem("Apellido","Horta");
// localStorage.setItem("Edad",25);
// localStorage.setItem("Es programadora?",true);

// localStorage.setItem("Nombre2","Gabriel");
// localStorage.setItem("Apellido2","Campos");
// localStorage.setItem("Edad2",28);
// localStorage.setItem("Es programadora?2",true);

// localStorage.setItem("Nombre3","Andrea");
// localStorage.setItem("Apellido3","Pérez");
// localStorage.setItem("Edad3",28);
// localStorage.setItem("Es programadora?3",true);

// /*
// Recuperar datos(lolacl.storage.getItem(key,value))


// */

// let recuperarNombre = localStorage.getItem("Nombre");
// console.log(recuperarNombre);

// let recuperarApellido = localStorage.getItem("Apellido");
// console.log(recuperarApellido);


// let recuperarProgramador = localStorage.getItem("Es programadora?");
// console.log(recuperarProgramador);



// /*Para Remover datos de LocalStorage
// Sintaxis:
// (local.Storage.remove(key))

// */
// localStorage.removeItem("Nombre");//Borrar Lucia
// localStorage.removeItem("Apellido"); //Borrar Horta

// //COnocerel largo de nuesgro almacenamiento
// //(localSorage.length)

// let longitusLocalStorage = localStorage.length;
// console.log(longitusLocalStorage);

// //Limpiar datos del localSotrage(local.Storage.clear())
// localStorage.clear();

// //Agregar elementos con sessionStorage
// sessionStorage.setItem("Perrito","Rocky");
// sessionStorage.setItem("Gatito","Bigotes");
// sessionStorage.setItem("Nutria","Hernesto");
// sessionStorage.setItem("Caracol","Gary");
// sessionStorage.setItem("Conejito","Griselo");


function guardarDatos(){
    localStorage.nombre = document.getElementById("nombre").value; //el value es para quetraiga el valor que ell usuario ingresa en el form
    localStorage.password = document.getElementById("password").value;
    document.getElementById("datos").innerHTML = ("Datos guardados coorrectamente")
    //sobreescribimos el contenido del parrafo por este nuevo mensaje

    //REvisar el funcionamiento correcto de mi codigo
    console.log(typeof localStorage.nombre);
    console.log(typeof localStorage.password);
}

function recuperarDatos(){
    if(localStorage.nombre != undefined && localStorage.password != undefined){
        document.getElementById("datos").innerHTML = ("Nombre: "+localStorage.nombre + "Password: " + localStorage.password);
    }else{
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }

}