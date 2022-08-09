/*
DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML 
y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir 
estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, 
nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias 
mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar. DOM significa Document Object Model, o modelo de objetos 
de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, 
ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS. 


Por que se considera API?
Debemos recordar que una API es una interfaz que nos permite acceder a los datos que nos envie el usuario, como por ejemplo, el texto que escriba el usuario en un input, el texto que seleccione el usuario en un select, etc. Es por eso que el DOM se define como una API, porque tambien es una interfaz que nos permite acceder a los datos que nos envie el usuario.


Elementos del DOM
Cuando hablamos del DOM, estamos hablando de dos representaciones de nuestra página web, una de ellas es la representación del codigo fuente (la estructura del HTML) y otra de ellas es la representación visual (la estructura del DOM).

    Node: Es una unidad mas basica, que puede ser element o un nodo de texto. El texto dentro de un nodo elemento se considera un nuevo nodo hijo de un tipo texto.

        - Document: El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos. Este objeto es el que nos permite acceder a todos los elementos del DOM (y que es representado como un arbol). Todos los nodos derivan del document.

        - Element: Son nodos definidos por etiquetas html. Por ejemplo, una etiqueta <div>, <h1>, <p>, etc.

        - Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de un tipo texto. 
        Si nosotros tenemos una etiqueta <h1>Titulo</h1>, el h1 es un nodo elemento, y el texto Titulo es un nodo texto.

        - Atributos: Los atributos de las etiquetas definen nodos (en JS no los veremos como nodos, si no como informacion asociada al nodo de tipo element). No son nodos aparte, si no informacion asociada a un nodo.

        - Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML, generan nodos.


        Con JavaScript podemos cambiar:

        - Todos los elementos HTML de la pagina web.
        - Todos los atributos de la pagina web.
        - Todos los estilos CSS de la pagina web.
        - Eliminar elementos y atributos HTML existentes.
        - Agregar nuevos elementos y atributos HTML.
        - Reaccionar a todos los eventos HTML existentes en la pagina.
        - Crear nuevos eventos HTML en la pagina.



SELECCIONAR ELEMENTOS
Nos permiten realizar busqueda dependiendo de lo que nosotros queramos pasarle como parametro
 sintaxis:
 -getElementById("IdElemento"): Buscar el elemnto por el ID
 -getElementsByClassName("nombreClase"): busca elementos por el nombre de clase
 -getElementsByTagName("nombreEtiqueta"): Busca un elemento por su etiqueta
 -getElementByName():Busca un elemento por su nombre 

 Metodos modernos

 -QuerySelector(): Busca el PRMER elemento que coincida con el selector
 -querySelectorALL(): busca TODOS los elementos que coinciden con el selector

*/
let parrafo = "Hola Generation"
let parrafo2 = "Quiero chilaquiles"

//getElementById():
const element = document.getElementById('parrafo4');

//getElementsByClassName("nombreClase")
const elementClass = document.getElementsByClassName("parrafitos");

//getElementsByTagName("nombreEtiqueta") y ByName
const elementTag = document.getElementsByTagName("p");
const elementName = document.getElementsByName("primerparrafo");

//querySelector
const querySelector = document.querySelector('#parrafo3');
const querySelector2 = document.querySelector('.parrafitos'); //solo utiliza

//querySelectorAll() se utiliza normalmente para traer clases
const querySelectorALL = document.querySelectorAll(".parrafitos");

/*
CREAR ELEMENTOS

-createElement(): Crea un element EN MEMORIA del tipo element(<div></div>)
-createComment(): Crea un comentario
-createTextNode(): Crea un nodo del tipo texto

-cloneNode(): Clonar un elemnto
-Investigar los metodos para añadir, modificar, y elminar atributos

*/


//createElement()
const div = document.createElement("div");
const crearImagen = document.createElement("img")

//createTextNode()
const textNode = document.createTextNode("Hola a todos, me gustan los chilaquiles verdes")

//cloneNode()
const parrafoAClonar = document.createElement("parrafo");
parrafoAClonar.textContent = "Spy un parrafo, cloname";

const parrafoClon = parrafoAClonar.cloneNode(true); //true se usa para clonar todo lo que hay en ella

const encabezadoOriginal = document.getElementById("encabezado");

const encabezadoClon1 = encabezadoOriginal.cloneNode(); //solo clona las propiedades y estructuras
const encabezadoClon2 = encabezado.cloneNode(true); //en este copia las propiedades y el texto delas etiquetas
//encabezado es el id de la etiqueta que se esta clonando por eso funciona


/*
MODIFICAR ELEMENTOS

Son metodos que nos van a permitir hacer modificaciones a 
nuestros elementos dentro del documento HTML

    - textContent: Mostrar el contenido en texto de un element
    - innerHTML: Modificar el contenido de un element
    - outerHTML: Mostrar el contenido con todo y etiquetas
*/


//Text Content
encabezado.textContent;
parrafo.textContent;
parrafo2.textContent;


//innerHTML
parrafo.innerHTML = ("Lo siento ahora yo sy el texto del parrafo 1");

//Ejemplo del PlayStation
// nombreProduccto.innerHTML = ("PlayStation 5");
// nombreProduccto.innerHTML = ("1500");
// imagenProducto.innerHTML = ("imagen.jpg")


//outerHTML podría utilizarse para comprobar que las cosas fucionen
encabezado.outerHTML;
parrafo.outerHTML;

/*
INSERTAR ELEMENTOS

Son metodos que nos permiten poner la informacion que estaba en una memoria virtual de forma visual en nuestro documento

    - .appendChild()
    - .remove
    - .removeChild (investigar)
    - .replaceChild (investigar)

*/

//appendChild()
const appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt = "Imagen sorpresa";

document.body.appendChild(appendImg);

const appenParrado = document.createElement("p");
appenParrado.innerHTML=("Hola, psy un parrafo hijo ");

document.body.appendChild(appenParrado);
//Explicacion: Primero creamos un elemento (etiqueta) llamada img (existe de forma virtual), le agregamos atributos como src y alt, y por ultimo conectamos al DOM usando el appendChild sobre nuestro document.body

//Investigar remover child, replacer child y otras formas de agregarlos (antes, adyacente, a un lado, etc.).


//.remove
const borrar = document.querySelector("#parrafo4");
encabezado.remove();

//lo mismo pero manera refactorizada
const borrarRefactorizado = document.querySelector("#parrafo4").remove();

/*
MODIFICACIÓN DE ESTILOS (EN LINEA)


 */

document.getElementById("temerarios").style.color = "green";
document.getElementById("temerarios").style.fontSize = "50px";
document.getElementById("temerarios").style.fontFamily = "Arial";
document.getElementById("temerarios").style.fontWeight = "bold";
document.getElementById("temerarios").style.fontStyle = "italic";
document.getElementById("temerarios").style.textDecoration = "underline";
document.getElementById("temerarios").style.textAlign = "center";
document.getElementById("temerarios").style.textTransform = "uppercase";
document.getElementById("temerarios").style.letterSpacing = "2px";
document.getElementById("temerarios").style.wordSpacing = "2px";


/*

EVENTOS

Una forma mucho mas facil de modificar el contenido de un elemento 
es usando eventos. Los eventos son acciones que se puedne realizar 
en un elemento, para modificar los valores de los atributos, estilos, etc.

Algunos de los eventos mas comunes son:

- Cuando un usuario hace clic con el raton
- Cuando se ha cargado una pagina web
- Cuando se ha cargado una imagen
- Cuando el raton se mueve sobre un elemento
- Cuando se cambia un campo de entrada
- Cuando se envia un formualrio HTML
- Cuando un usuario pulsa una tecla


- Evento mediante HTMl (mala practica)
    <!-- <button onclick="alert('Hola, gracias por saludarme')">SALUDAR</button> -->
    Es la mas sencilla pero la menos recomendable, porque se ejecuatan

- Eventos mediante el DOM (HTML + JS) (mas o menos una mala practica)
   Es una forma alternativa de gestionar eventos, creando HTML desde la API DOM (pero es una trampoa porque seguimos suando HTML para el uso del botón)

En lugar de agregar el atributo onclick al botón, lo localizamos mediante un querySelector. Luego le asignamos una función con el código deseado, en este caso, una alerta.

//Eventos desde el JS (trampa)
const button = document.querySelector(".botonSaludo");
button.onclick = function(){
    alert("Hola desde el JS");
}

- EventListener (buena practica)

Permite agregar una escucha del evento indicado (primer parámetro), y en el caso de que ocurra, se ejecuta la función asociada indicada (segundo parámetro).

.addEventListener(evento, function);

*/

const button = document.querySelector(".botonSaludo");
button.addEventListener("click", function(){
    alert("Hola, saludos con un Event Listener");
});




