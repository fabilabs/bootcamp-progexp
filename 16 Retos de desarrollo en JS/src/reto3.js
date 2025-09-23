// Palabras prohibidas
const palabrasProhibidas = ["password", "123456", "qwerty", "admin", "letmein", "welcome"];

// Historial de contraseñas (máximo 5, LIFO)
let historial = [];

// Función generadora de contraseñas
function generarContrasena(longitud = 12, mayusculas = true, numeros = true, simbolos = true) {
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()-_=+[]{};:,.<>?";
    let chars = minus;
    if (mayusculas) chars += mayus;
    if (numeros) chars += nums;
    if (simbolos) chars += syms;
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        contrasena += chars[Math.floor(Math.random() * chars.length)];
    }
    // Guardar en historial (LIFO, máximo 5)
    historial.unshift(contrasena);
    if (historial.length > 5) historial.pop();
    return contrasena;
}

// Función validadora de contraseñas
function validarContrasena(contrasena) {
    const minLong = contrasena.length >= 8;
    const mayus = /[A-Z]/.test(contrasena);
    const minus = /[a-z]/.test(contrasena);
    const num = /[0-9]/.test(contrasena);
    const sym = /[!@#$%^&*()\-_=+\[\]{};:,.<>?]/.test(contrasena);
    const prohibida = palabrasProhibidas.some(p => contrasena.toLowerCase().includes(p));
    return {
        minLong,
        mayus,
        minus,
        num,
        sym,
        prohibida,
        valida: minLong && mayus && minus && num && sym && !prohibida
    };
}

// Función para calcular fortaleza
function fortalezaContrasena(contrasena) {
    const val = validarContrasena(contrasena);
    if (!val.minLong || val.prohibida) return "Débil";
    let puntos = 0;
    if (val.mayus) puntos++;
    if (val.minus) puntos++;
    if (val.num) puntos++;
    if (val.sym) puntos++;
    if (puntos === 4 && contrasena.length >= 12) return "Fuerte";
    if (puntos >= 3) return "Media";
    return "Débil";
}

// Mostrar historial
function mostrarHistorial() {
    console.log("Historial de contraseñas generadas:");
    historial.forEach((c, i) => console.log(`${i + 1}: ${c}`));
}

// Ejemplo de uso
definirEjemplo();
function definirEjemplo() {
    const c1 = generarContrasena(10, true, true, true);
    const c2 = generarContrasena(14, true, true, true);
    const c3 = generarContrasena(8, false, true, false);
    const c4 = generarContrasena(16, true, true, true);
    const c5 = generarContrasena(12, true, false, true);
    const c6 = generarContrasena(9, true, true, false);
    mostrarHistorial();
    [c1, c2, c3, c4, c5, c6].forEach((c, i) => {
        const val = validarContrasena(c);
        console.log(`\nContraseña ${i + 1}: ${c}`);
        console.log("Valida:", val.valida);
        console.log("Fortaleza:", fortalezaContrasena(c));
        if (!val.valida) {
        console.log("Motivos:");
        if (!val.minLong) console.log("- Menos de 8 caracteres");
        if (!val.mayus) console.log("- Falta mayúscula");
        if (!val.minus) console.log("- Falta minúscula");
        if (!val.num) console.log("- Falta número");
        if (!val.sym) console.log("- Falta símbolo");
        if (val.prohibida) console.log("- Contiene palabra prohibida");
        }
    });
}
