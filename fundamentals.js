// Variables → contenedor de información 

//ES6
// Let - const
// no var - hoisting

// var CI = 123;
// let sueldo= 5;

// ↓↓↓ Tipos de datos - Primitivos ↓↓↓
let numOrden = 127 // INT
let modulo="mis ordenes" //STRING
let status =true //BOOLEAN
let tipoPago ='E' //CHAR
let precioFinal = 155.99 //FLOAT
let sueldo //UNDEFINED

//  ↓↓↓ Tipos de datos - Compuestos ↓↓↓

let ordenes=["Carro", "Camiseta","Zapatos"] //ARRAY
let detalleOrden={
    id:1,
    estado:true,
    precio:150.99,
    items:["Pc","Monitor","Mouse"]
} // OBJETO

//  Strings

console.log(ordenes)

// csl para console.log()

// String 

let nombreCompelto = "Diego Mullo - Estudiante"
nombreCompelto.length
nombreCompelto.toUpperCase() // es util para guardar en bdd 
nombreCompelto.toLocaleLowerCase() // es util para guardar en bdd 

nombreCompelto.trim() // remueve los caracteres blanco de un string 
nombreCompelto.includes("Estudiante") // validar si en el string hay una palabra especifica

// ES6 - Template Strings

// console.log(Hola + nombreCompelto)
// console.log(`Hola ${nombreCompelto}`) 

//  CONTROL MAS EL DE LOS CORCHETES Y SE HACE COMENTARIO

// Numbers

let cuotas="36"
// ES6 de string a numero
console.log(+cuotas+1)

console.log(4*3 **2)

// BOOLEANS
let saldoUsuario = 1000
let saldoTarjeta = "1000"
//Comparacion del valor
console.log(saldoUsuario==saldoTarjeta)
//ES6 - Comparacion del valor y tipo "Comparacion estricta"
console.log(saldoTarjeta===saldoUsuario)

// Condicionales

let carritoCompras=[]

if (carritoCompras.length <0){
    console.log("El carrito esta vacío")
}
else{
    console.log("El carrito tiene elementos")
}

//ES6 - Operador ternario

carritoCompras.length === 0 ? log("Carrito vacío") : console.log("Carrito lleno") 

// ES6 - Funciones
// Bloque de código reutilizable

// Funcion declarada
function validarUsuario() {
    console.log("Usuario validado")
}

// Funcion expresada
const validarRol = function(){
    console.log("Rol validado")
}

// ES6 - Funcion flecha
const validarMail= ()=>{
    console.log("Mail validad")
}