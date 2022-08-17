/*

*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

const felix = {
    nombre: "Felix",
    color: "Naranja",
    peso: "10Kg",
    edad: "5 anios",
    colorOjos: "verdes",
    raza: "fold escoces",
    sexo: "hembra",
    vacunas: true,
    numeroBigotes: 20,
    tipoPelo:"largo",
    manchas: true,
    imagen: "felix.jpg"
};
console.log(felix);
console.log(felix.nombre);
console.log(felix.raza);
console.log(felix.numeroBigotes);


//plantilla para crear muchos gatitos

//1. Defino mi pantilla con las propiedades como variables, para despues agregar valores
class gatito{
    nombre = "";
    color = " ";
    edad = 0;
    raza = "";

    //3.- Crear el constructor (dentro de la clase)
    constructor(nombre, color, edad, raza){ //necesitamos pasar los parametros
        this.nombre = nombre;
        this.color = color;
        this.edad = edad;
        this.raza = raza;
    }//fin del constructor
    //this (este o esto): Nos va a indicar el lugar donde estamos (ciudad o en el campo). Necesitamos saber que esta palabra es reservada, y nos ayuda a saber el aqui y el ahora.Hace referencia a la clase en la questamos, y los objetos que estamos creado.
   
   
   
    //2. Defino mis metodos COMO FUNCIONES, porque con estas funciones podemos realizar acciones

    maullar(){
        console.log("Miaau");
    }
    
    dormir(){
        console.log("ZZZzzzZZZZzz");
    }
    
    ronronear(){
        console.log("rrrrrrrrrrrrr");
    }



}




//4. Crear gatitos
let kitty = new gatito("Kitty","Blanco",666,"bobtail japonés");
let garfield = new gatito("Garfield", "Naranja", 4, "cheetos");
let tonchi = new gatito("Tonchi", "Gris", 6, "british shorthair");
let paprika = new gatito("Paprika", "balnco con café", 4, "Himalayo");

console.log(kitty);
console.log(garfield);

kitty.maullar();
kitty.dormir();


// imprimirInfo(div,bg){
//     div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
//     <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
//     <div class="card-body">
//       <h5 class="card-title">${this.edad}</h5>
//       <p class="card-text">${this.raza}.</p>
      
//     </div>
//   </div>`; 
// }


