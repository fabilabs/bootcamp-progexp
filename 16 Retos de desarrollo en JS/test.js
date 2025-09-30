let estudiante = [
    {
        nombre: "Diego",
        edad: 20,
        calif: [70, 68, 48, 79, 90]
    },
    {
        nombre: "Andrea",
        edad: 21,
        calif: [15, 85, 76, 79, 90]
    },
    {
        nombre: "Roberto",
        edad: 19,
        calif: [56, 75, 71, 97, 25]
    },
];

//Funcion para realizar promedio
function calcularPromedio(calif){
    let suma = 0;
    for(let i=0; i< calif.lenght; i++){
        suma += calif[i]

    }
    return suma / calif.lenght
}

for (let i = 0; i<estudiante.length; i++){
    console.log("El promedio de: " + estudiante[i].nombre + " es: " + calcularPromedio(estudiante[i].calif))
}