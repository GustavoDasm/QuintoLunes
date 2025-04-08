//Profesor esta depencia es para que pueda escribir en consola
const readline = require('readline-sync');

console.log("Otra aclaracion para poner los datos primero es un enter y luego el datos")
console.log("Los ejercicios estan comentados, para ver cada ejercicio descomente abajo profesor de cada ejercicio osea funcion")

// ARRAY GENERAL ---------------------------------------------------
var array2 = [2,6,5,4,-2,-8]

// 1. Sumar elementos de un array:
// Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.


function sumarElementos(array) {
    let suma = 0
    for (arreglo of array) {
        suma += arreglo
    }
    console.log("Suma de numneros: ", suma);
}

//sumarElementos(array2) ---------------------------------------------------

// 2. Número mayor y menor:
// Crea una función que reciba un array de números y retorne el mayor y el menor.
function obtenerMayorYMenor(array) {
    let numeroMayor;
    let numeroMenor;
    numeroMayor = Math.max(...array);  
    numeroMenor = Math.min(...array);  
    console.log(`Mayor: ${numeroMayor}\nMenor: ${numeroMenor}`);
}
//obtenerMayorYMenor(array2) ---------------------------------------------------

// 3. Contar elementos pares:
// Dado un array de números, cuenta cuántos son pares y devuelve el total.
function contarPares(array) {
    let sumaPares = 0;
    array.forEach(element => {
        if (element % 2 == 0) {
            sumaPares++;
        }
    });
    console.log("Suma de pares:", sumaPares);
}

//contarPares(array2)---------------------------------------------------

// 4. Ordenar un array:
// Implementa un algoritmo que ordene un array de números de menor a mayor sin usar .sort().
function ordenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log("Array ordenado:", array);
}

//ordenarArray(array2)---------------------------------------------------

// 5. Buscar un elemento:
// Dado un array de nombres, busca si un nombre específico está en la lista y devuelve su posición.

let arrayNombres = ["pedro", "pablo", "gus", "cesar"]

function buscarElemento(array, nombre) {
    let posicion = -1;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === nombre) {
            posicion = index;
            break;
        }
    }

    if (posicion !== -1) {
        console.log(`El nombre ${nombre} se encuentra en la posición ${posicion}`);
    } else {
        console.log(`El nombre ${nombre} no se encuentra en el array.`);
    }
}

//buscarElemento(arrayNombres, "gus")---------------------------------------------------

// 6. Revertir un array:
// Implementa una función que invierta el orden de un array sin usar .reverse().
function invertirArray(array) {
    let numeroArray = [];
    
    for (let index = array.length - 1; index >= 0; index--) {
        numeroArray.push(array[index]);
    }

    console.log("Array invertido: ", numeroArray);
}

//invertirArray(array2)---------------------------------------------------

// 7. Convertir nombres a mayúsculas:
// Dado un array de nombres, usa map() para convertirlos todos a mayúsculas.
function convertirAMayusculas(array) {
    let mayusculas = array.map(nombre => nombre.toUpperCase());
    console.log("Nombres en mayúsculas:", mayusculas);
}

//convertirAMayusculas(arrayNombres)---------------------------------------------------

// 8. Sumar solo los números positivos:
// Filtra los negativos y suma los positivos.
function sumarPositivos(array) {
    const positivos = array.filter(num => num >= 0); 
    const negativos = array.filter(num => num < 0);  
    const suma = positivos.reduce((acum, num) => acum + num, 0);
    console.log("Negativos:", negativos);
    console.log("Suma de positivos:", suma);
}

//sumarPositivos(array2)---------------------------------------------------


// 9. Obtener el primer múltiplo de 5:
// Usa find() para hallar el primer número múltiplo de 5 en un array.
function primerMultiploDeCinco(array) {
    const resultado = array.find(num => num % 5 === 0);
    console.log(resultado);  
}

//primerMultiploDeCinco(array2)---------------------------------------------------


// 10. Tabla de multiplicar:
// Pide al usuario un número y usa un for para imprimir su tabla de multiplicar del 1 al 10.
function tablaMultiplicar() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 11; j++) {
            console.log(`${i} * ${j} = ${i*j}`)
        }
        console.log()
    }
}

//tablaMultiplicar()---------------------------------------------------

// 11. Generar una secuencia de Fibonacci:
// Usa un for para generar los primeros 10 números de la serie de Fibonacci e imprímelos.
function generarFibonacci(limite) {
    let fib = [0, 1];

    for (let i = 2; i < limite; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib);

}

//generarFibonacci(10);---------------------------------------------------

// 12. Adivinar un número:
// Genera un número aleatorio del 1 al 10 y usa un while para pedir al usuario que lo adivine hasta que lo haga correctamente.

function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let adivinanza;

    while (adivinanza !== numeroAleatorio) {
        adivinanza = parseInt(readline.question("Adivina un numero del 1 al 10: "), 10);

        if (adivinanza < numeroAleatorio) {
            console.log("El numero es mayor. Intenta de nuevo.");
        } else if (adivinanza > numeroAleatorio) {
            console.log("El numero es menor. Intenta de nuevo.");
        } else {
            console.log("¡Felicidades, adivinaste el numero!");
        }
    }
}

//adivinarNumero();---------------------------------------------------

// 13. Contar regresivamente desde un número:
// Usa while para imprimir una cuenta regresiva desde un número ingresado por el usuario hasta 0.
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

//cuentaRegresiva(10)---------------------------------------------------

// 14. Validar entrada de usuario:
// Pide al usuario que ingrese un número mayor que 0. Si ingresa un número inválido, vuelve a pedirlo usando do while.
function validarEntrada() {
    let numero;
    do {
        numero = parseInt(readline.question("Ingresa un numero mayor que 0:"));
    } while (numero <= 0 || isNaN(numero));
    
    console.log(`Numero válido: ${numero}`);
}

//validarEntrada()---------------------------------------------------


// 15. Mostrar menú hasta que el usuario salga:
// Muestra un menú con opciones y usa do while para repetir hasta que el usuario elija salir.
function mostrarMenu() {
    let opcion;
    do {
        console.log("1. Opción 1");
        console.log("2. Opción 2");
        console.log("3. Salir");
        
        opcion = parseInt(readline.question("Selecciona una opcion:"));
        
        switch(opcion) {
            case 1:
                console.log("Has seleccionado la opcion 1.");
                break;
            case 2:
                console.log("Has seleccionado la opcion 2.");
                break;
            case 3:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opcion no valida.");
        }
    } while (opcion !== 3);
}

//mostrarMenu();---------------------------------------------------

// 16. Sumar solo los números impares entre 1 y 50:
// Usa for para recorrer los números del 1 al 50.
// Usa if para sumar solo los impares.
// Usa while para verificar si la suma supera 500 y, si es así, detener el proceso.
function sumarImparesHasta50() {
    let suma = 0;
    let i = 1;

    for (i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
        if (suma > 500) {
            break;
        }
    }

    console.log(`La suma de los numeros impares es: ${suma}`);
}

//sumarImparesHasta50();  ---------------------------------------------------


// 17. Contador de intentos:
// Simula un intento de login.
// Usa while para permitir 3 intentos.
function intentoLogin() {
    let intentos = 0;
    const usuarioCorrecto = "Gustavo";
    const contrasenaCorrecta = "1234";
    let usuario, contrasena;

    while (intentos < 3) {
        usuario = readline.question("Ingresa tu usuario:");
        contrasena = readline.question("Ingresa tu contraseña:");

        if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
            console.log("¡Login exitoso!");
            break;
        } else {
            intentos++;
            console.log(`Intento ${intentos}/3 fallido.`);
        }

        if (intentos === 3) {
            console.log("Has alcanzado el límite de intentos.");
        }
    }
}

//intentoLogin();  ---------------------------------------------------


// 18. Sumar hasta que el usuario ingrese 0:
// Pide números al usuario y usa while para sumarlos hasta que ingrese 0.

function sumarHastaCero() {

    let suma = 0;
    let numero;

    do {
        numero = parseInt(readline.question("Ingrese un numero (0 para salir): "));
        if (!isNaN(numero)) {
            suma += numero;
        } else {
            console.log("Eso no es un número válido.");
        }
    } while (numero !== 0);

    console.log("La suma total es:", suma);
}

//sumarHastaCero();---------------------------------------------------

// 19. Imprimir la serie de Fibonacci hasta que un número supere 100:
// Usa while para generar la serie de Fibonacci hasta que un número supere 100.
function fibonacciHasta100() {
    let a = 0, b = 1;
    let arrayFibonacci = []
    while (a <= 100) {
        arrayFibonacci.push(a)
        let temp = a;
        a = b;
        b = temp + b;
    }
    console.log(arrayFibonacci);
}

//fibonacciHasta100();---------------------------------------------------

// 20. Imprimir los múltiplos de 3 hasta 50:
// Usa while para imprimir los múltiplos de 3 menores a 50.
function multiplosDe3Hasta50() {
    for (let index = 3; index < 51; index+=3) {
        console.log(index)
    }
}

//multiplosDe3Hasta50()---------------------------------------------------