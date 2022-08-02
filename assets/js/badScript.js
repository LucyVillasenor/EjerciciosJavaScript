//  Bad practices
var seg = 1; //la variable no puede nombrarse con número
var second = 1; //el valor númerico no puede llevar letras

// Why doesn't it work?
var ifCondition =  if; //No se puede utilizar palabras reservadas // Se usa comelCase


// Should equal formula for wild wings
var wings = 10;
var buffalo = 15;
var buffaloWings = wings + buffalo; // Se usa comelCase //Definir variables antes // falta punto y coma


// Null variable
var vidaSocial = Null; // Dar contexto al nombre de la variable 


// All variables should equal 1
var uno = one = wan = uma = um = 1; // Igualar las variables a uno poniendo signos de "=" y colocar el 1 al final


// It's broken
console.log(.1); // Se pone el .1 dentro de los paréntesis


// Console.log para mostrar [area] de un cuadrado
var ladoa=8;
var ladob=5;
var area = (ladoa * ladob)
console.log(area); // se definieron variables con el valor de los lados -> se crea otra variable con la fórmula -> se muestra en consola;

// Should equal 4
var four = 2 + 2; //el segundo 2 se cambia de string a númerico; 

// Doesn't work for math problems
var pi = 3.141516; //Para problemas matematicos se define de forma númerica