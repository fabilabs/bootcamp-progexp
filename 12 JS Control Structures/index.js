//////////////////////////////////////
// Ejercicio 1: Verificador de Edad //
//////////////////////////////////////
const edad = prompt('¿Cuál es tu edad?');
if (edad < 18) {
    console.log('Menor de edad (menor a 18 años)');
} else {
    console.log('Mayor de edad (18 años o más)');
}


////////////////////////////////////////////////
// Ejercicio 2: Calculadora de Calificaciones //
////////////////////////////////////////////////
const calificacion = prompt('Ingresa tu calificación (0-100):');
let letra;
if (calificacion >= 90 && calificacion <= 100) {
    letra = 'A';
} else if (calificacion >= 80 && calificacion <= 89) {
    letra = 'B';
} else if (calificacion >= 70 && calificacion <= 79) {
    letra = 'C';
} else if (calificacion >= 60 && calificacion <= 69) {
    letra = 'D';
} else if (calificacion >= 0 && calificacion <= 59) {
    letra = 'F';
} else {
    letra = 'Calificación inválida';
}
console.log('Calificación numérica:', calificacion);
console.log('Calificación letra:', letra);


////////////////////////////////////////////////////
// Ejercicio 3: Menú de Operaciones (Calculadora) //
////////////////////////////////////////////////////
console.log('Menú de operaciones:');
console.log('1. Suma (+)');
console.log('2. Resta (-)');
console.log('3. Multiplicación (*)');
console.log('4. División (/)');
const operacion = prompt('Elige una operación (+, -, *, /):');
const num1 = parseFloat(prompt('Ingresa el primer número:'));
const num2 = parseFloat(prompt('Ingresa el segundo número:'));
let resultado;
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        console.log('Resultado:', resultado);
        break;
    case '-':
        resultado = num1 - num2;
        console.log('Resultado:', resultado);
        break;
    case '*':
        resultado = num1 * num2;
        console.log('Resultado:', resultado);
        break;
    case '/':
        if (num2 === 0) {
            console.log('Error: No se puede dividir por cero.');
        } else {
            resultado = num1 / num2;
            console.log('Resultado:', resultado);
        }
        break;
    default:
        console.log('Operación no válida.');
}


//////////////////////////////////////////////////////
// Ejercicio 4: Contador de Números Pares e Impares //
//////////////////////////////////////////////////////
let pares = 0;
let impares = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' es par');
        pares++;
    } else {
        console.log(i + ' es impar');
        impares++;
    }
}
console.log('Total de pares encontrados:', pares);
console.log('Total de impares encontrados:', impares);


//////////////////////////////////////////////////////////
// Ejercicio 5: Sistema de Login con Intentos Limitados //
//////////////////////////////////////////////////////////
const usuarioCorrecto = 'usuario';
const contrasenaCorrecta = '1234';
let autenticado = false;
for (let intento = 1; intento <= 3; intento++) {
    const usuario = prompt('Usuario:');
    const contrasena = prompt('Contraseña:');
    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        console.log('Login exitoso');
        autenticado = true;
        break;
    } else {
        if (intento < 3) {
            console.log('Credenciales incorrectas. Intentos restantes:', 3 - intento);
        } else {
            console.log('Cuenta bloqueada. Demasiados intentos fallidos.');
        }
    }
}