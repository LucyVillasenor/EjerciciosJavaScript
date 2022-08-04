const nineros = false;
const hambre = true;

//AND Todas las condiciones deben ser true para tener true
alert(nineros == hambre); //false
// true && true  => true
// true  && false => false
// false && false => false


//OR solo una condicion debe ser true para ser true
alert(nineros || hambre); //true
// true || true = true
// true || false = true
// false || false = false



//NOT es la negación a la condición

// Es la negación a la condición
// true => false, false => true


//+= 
var a = 2;
a += 3; // suma
//también puede concatenar strings
var b = "hola"
b += "Mundo"


//-= 
var a = 2;
a -= 3; // resta
//No puede dsconcantenar una cadena 

//if(condicional) con ==
let hora = 8;
if (hora == 8) {
	alert("Buen dia");
}

//if(condicional) con !=
var hora = 3;
if (hora != 8) {
	console.log("Buen dia");
}


//if(condicional) con ==
var hungry = false;
if (hungry == true) {
	alert("Tengo mal del porky");
} else {

	alert("Two mimir");
}

//if(condicional) con <
var hour = 20;
if (hour < 18) {
 alert("Good day");
} else {
  alert("Tardes, ya");
}


var hour = 19;
if (hour <= 18) {
 alert("Todavía hay sol");
} else {
  alert("Tardes, ya");
}


var edad = 21;
if (edad >= 18) {
	alert("Crear cuenta");
} else {
	alert("bai bai");
}


var hora = 12;
if (hora <= 7 && hora > 0) {
	alert("Buenas madrugadas");
} else {
	alert("Que tenga un buen dia");
}


var hora = 12;
if (hora > 0) {
	if (hora <= 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }  
} else {
	alert("Su hora no existe");    
}


var nineros = prompt("Ingresa tus nineros");
if(nineros<=10){
    alert("Concha de vainilla y 4 picafresas");
} else if(nineros <=50){
    alert("Tacos vaporware y un agua de horchata");
} else if(nineros <=129){
    alert("Pizza de liru sisa sin piña como fiesta");
}

//////////SWITCH//////////


//Obtener el día actual

var dia = new Date().getDay();

//var dia = -1;
function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
        break;
    case 1:
    	return "Lunes";
        break;
    case 2:
    	return "Martes";
        break;
    case 3:
    	return "Miercoles";
        break;
    case 4:
    	return "Jueves";
        break;
    case 5:
    	return "Viernes";
        break;
    case 6:
    	return "Sabado";
        break;
    default:
    	return "Su fecha no es válida";
	}
}

alert(evalDate(dia));



// Para que sea un switch comparativo tipo (if) si se espera que alguna condicion
// sea verdadera, se utiliza un true, si se pesra que algun case sea false se utliza switch(false)
var nineros = prompt("Ingrese su deposito");

function miCarrito(dinero) {
    switch(true) {
        case (dinero <= 10):
            return "Churrumais";
            break;
        case (dinero <= 50):
            return "McTrio";
            break;
        case (dinero <= 100):
            return "Chilaquiles verdes c/ poio y 1/2L de naranja";
            break;
        case (dinero <= 500):
            return "1/2kg de chicharrones y 1 boleto al cine";
            break;
        default:
            return "No hay nineros";
    }
}

alert(miCarrito(nineros));


