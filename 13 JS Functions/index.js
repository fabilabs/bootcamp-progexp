////////////////////////////////////////////////////////
// Ejercicio 1: Verificar si un número es par o impar //
////////////////////////////////////////////////////////
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Ejemplo de uso:
console.log(esParOImpar(4)); // "par"
console.log(esParOImpar(7)); // "impar"


////////////////////////////////////////////////////
// Ejercicio 2: Calcular el mayor de tres números //
////////////////////////////////////////////////////
function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

// Ejemplo de uso:
console.log(mayorDeTres(5, 9, 3)); // 9
console.log(mayorDeTres(12, 7, 15)); // 15


/////////////////////////////////////////////////////
// Ejercicio 3: Calcular el factorial de un número //
/////////////////////////////////////////////////////
function factorial(n) {
    if (n < 0) {
        return undefined; // No existe factorial para negativos
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-3)); // undefined


///////////////////////////////////////////////////////////////
// Ejercicio 4: Calcular la suma de los primeros N naturales //
///////////////////////////////////////////////////////////////
function sumaPrimerosN(N) {
    if (N < 1) {
        return 0;
    }
    // Fórmula directa: suma = N * (N + 1) / 2
    return N * (N + 1) / 2;
}

// Ejemplo de uso:
console.log(sumaPrimerosN(5)); // 15 (1+2+3+4+5)
console.log(sumaPrimerosN(10)); // 55
console.log(sumaPrimerosN(0)); // 0


////////////////////////////////////////////////////////
// Ejercicio 5: Contar vocales en una cadena de texto //
////////////////////////////////////////////////////////
function contarVocales(texto) {
    // Expresión regular para buscar vocales (mayúsculas y minúsculas)
    const coincidencias = texto.match(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g);
    return coincidencias ? coincidencias.length : 0;
}

// Ejemplo de uso:
console.log(contarVocales("Hola mundo")); // 4
console.log(contarVocales("Bootcamp")); // 3
console.log(contarVocales("xyz")); // 0


/////////////////////////////////////////////////////////////
// Ejercicio 6: Generar una lista de números pares hasta N //
/////////////////////////////////////////////////////////////
function listaParesHastaN(N) {
    const pares = [];
    for (let i = 2; i <= N; i += 2) {
        pares.push(i);
    }
    return pares;
}

// Ejemplo de uso:
console.log(listaParesHastaN(10)); // [2, 4, 6, 8, 10]
console.log(listaParesHastaN(7)); // [2, 4, 6]
console.log(listaParesHastaN(1)); // []


//////////////////////////////////////////////////////////
// Ejercicio 7: Determinar si una palabra es palíndromo //
//////////////////////////////////////////////////////////
function esPalindromo(palabra) {
    // Normalizar: quitar acentos, pasar a minúsculas y eliminar espacios
    const normalizada = palabra
        .toLowerCase()
        .normalize("NFD")
        .replace(/[00-6f]/g, "")
        .replace(/\s/g, "");
    const invertida = normalizada.split("").reverse().join("");
    return normalizada === invertida;
}

// Ejemplo de uso:
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("javascript")); // false


////////////////////////////////////////////////////////
// Ejercicio 8: Encontrar el número mayor en un array //
////////////////////////////////////////////////////////
function mayorEnArray(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.max(...arr);
}

// Ejemplo de uso:
console.log(mayorEnArray([3, 7, 2, 9, 5])); // 9
console.log(mayorEnArray([-1, -5, -3])); // -1
console.log(mayorEnArray([])); // undefined


//////////////////////////////////////////////////////////
// Ejercicio 9: Convertir grados Celsius a Fahrenheit   //
//////////////////////////////////////////////////////////
function celsiusAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

// Ejemplo de uso:
console.log(celsiusAFahrenheit(0)); // 32
console.log(celsiusAFahrenheit(25)); // 77
console.log(celsiusAFahrenheit(-10)); // 14


///////////////////////////////////////////////////////////////////////
// Ejercicio 10: Verificar si un número es positivo, negativo o cero //
///////////////////////////////////////////////////////////////////////
function tipoDeNumero(n) {
    if (n > 0) {
        return "positivo";
    } else if (n < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Ejemplo de uso:
console.log(tipoDeNumero(5)); // "positivo"
console.log(tipoDeNumero(-3)); // "negativo"
console.log(tipoDeNumero(0)); // "cero"


//////////////////////////////////////////////////
// Ejercicio 11: Determinar el día de la semana //
//////////////////////////////////////////////////
function diaDeLaSemana(n) {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    if (n >= 1 && n <= 7) {
        return dias[n - 1];
    } else {
        return "Número inválido";
    }
}

// Ejemplo de uso:
console.log(diaDeLaSemana(1)); // "Lunes"
console.log(diaDeLaSemana(5)); // "Viernes"
console.log(diaDeLaSemana(7)); // "Domingo"
console.log(diaDeLaSemana(0)); // "Número inválido"


/////////////////////////////////////////////////////////////
// Ejercicio 12: Calcular el tipo de tarifa de un servicio //
/////////////////////////////////////////////////////////////
function costoTarifa(codigo) {
    switch (codigo.toUpperCase()) {
        case "A":
            return 100;
        case "B":
            return 200;
        case "C":
            return 300;
        default:
            return "Código inválido";
    }
}

// Ejemplo de uso:
console.log(costoTarifa("A")); // 100
console.log(costoTarifa("b")); // 200
console.log(costoTarifa("C")); // 300
console.log(costoTarifa("D")); // "Código inválido"
