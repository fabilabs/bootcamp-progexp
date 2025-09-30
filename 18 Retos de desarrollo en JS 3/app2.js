// =============================
//  GENERADOR DE CONTRASEÑAS
// =============================

// 1. CONFIGURACIÓN arrays elementos 26,digitos 10
const Mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const Minusculas = "abcdefghijklmnopqrstuvwxyz".split("");
const Numeros    = "0123456789".split("");
const Simbolos   = "!@#$%^&*".split("");

// Flags de inclusión
const incluirMayusculas = true;
const incluirMinusculas = true;
const incluirNumeros    = true;
const incluirSimbolos   = true;

// Pool inicial 
// Este array actuará como un “bolsillo” o “bolsa” de caracteres disponibles para crear la contraseña, no lo comprendi muy bien
let caracteres = [];

// Construcción del caracteres

// si está en true, entonces ejecutamos el código.Se repite la misma lógica para minúsculas, números y símbolos.
// En cada caso, si el flag está activado, se añaden esos caracteres al
if (incluirMayusculas) caracteres = caracteres.concat(Mayusculas);
if (incluirMinusculas) caracteres = caracteres.concat(Minusculas);
if (incluirNumeros)    caracteres = caracteres.concat(Numeros);
if (incluirSimbolos)   caracteres = caracteres.concat(Simbolos);

if  caracteres.length === 0) {
    console.error("No hay caracteres para generar contraseña");
}

// =============================
// 2. GENERACIÓN // Función para generar una contraseña de longitud dada

// =============================
function generarContrasena(longitud = 12) {
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * pool.length);
        const caracter = caracteres[indiceAleatorio];
        contrasena += caracter; // como un string
    }

    return contrasena;
}
// Generamos una nueva contraseña de ejemplo
const nuevaContrasena = generarContrasena(12);
console.log("Contraseña generada:", nuevaContrasena);

// =============================
// 3. VALIDACIÓN
// =============================
function validarContrasena(password) {
    const criterios = {
        longitud: password.length >= 8,
        mayuscula: /[A-Z]/.test(password),
        minuscula: /[a-z]/.test(password),
        numero: /\d/.test(password), //decimal 0123456789 /[0-9]/ = /\d/
        simbolo: /[!@#$%^&*]/.test(password),
        prohibidas: !/(1234|password|qwerty)/i.test(password)
    };

    return criterios;
}

console.log("Validación:", validarContrasena(nuevaContrasena));

// =============================
// 4. ANÁLISIS DE FORTALEZA
// =============================
function analizarFortaleza(password) {
    let score = 0;
    // Sumamos puntos si cumple cada criterio
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;

    if (score <= 2) return "Débil";
    if (score === 3 || score === 4) return "Media";
    return "Fuerte";
}

console.log("Fortaleza:", analizarFortaleza(nuevaContrasena));

// =============================
// 5. GESTIÓN DE HISTORIAL
// =============================
let historial = [];
// Array para guardar las últimas 5 contraseñas generadas
// hitorial = [3erpass, 4topass, 5topass, 6topass, 7mopass]

function guardarEnHistorial(password) {
    historial.push(password);

    // Evitar que se guarden más de 5
    if (historial.length > 5) {
        historial.shift(); // elimina el más viejo
    }
}
// Guardamos la contraseña generada en el historial
guardarEnHistorial(nuevaContrasena);
console.log("Historial:", historial);