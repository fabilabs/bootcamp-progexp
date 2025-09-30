function generarContraseña(longitud, minus, mayus, num, sim) {
    const minusculas = "abcdefghijklmnopqrstuvwxyz"
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeros = "0123456789"
    const simbolos = "#$%&/()=?¡[¨*"

    let caracteres = ""
    if (minus) caracteres += minusculas
    if (mayus) caracteres += mayusculas
    if (num) caracteres += numeros
    if (sim) caracteres += simbolos

    let contraseña = ""
    for (let i = 0; i < longitud; i++) {
        contraseña += caracteres[Math.floor(Math.random() * caracteres.length)]
    }
}

function validarContraseña (contraseña) {
    const minLongitud = contraseña.length >= 10
    const minuscu = /[a-z]/.test(contraseña)
    const mayuscu = /[A-Z]/.test(contraseña)
    const nume = /[0-9]/.test(contraseña)
    const simbo = /[#$%&/()=?¡[¨*]/.test(contraseña)
    return {minLongitud, minuscu, mayuscu, nume, simbo}
}

let password = (generarContraseña(12, true, true, false, true))
console.log (password)

let validacion = validarContraseña(password)
console.log(validacion)


