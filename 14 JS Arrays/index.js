// #####################################
// ##### Ejercicio 1 - uso de push #####
// #####################################
// Crear un array con 3 nombres de frutas
let frutas = ["manzana", "plátano", "naranja"];

// Agregar dos frutas nuevas usando push
frutas.push("pera", "uva");

// Mostrar el resultado en consola
console.log(frutas);


// ####################################
// ##### Ejercicio 2 - uso de pop #####
// ####################################
// Eliminar la última fruta del array
let frutaEliminada = frutas.pop();

// Mostrar la fruta eliminada y el array resultante
console.log("Fruta eliminada:", frutaEliminada);
console.log("Array resultante:", frutas);


// ######################################
// ##### Ejercicio 3 - uso de shift #####
// ######################################
// Crear un array de 4 ciudades
let ciudades = ["Madrid", "París", "Londres", "Roma"];

// Eliminar la primera ciudad con shift
let ciudadEliminada = ciudades.shift();

// Mostrar la ciudad eliminada y el array actualizado
console.log("Ciudad eliminada:", ciudadEliminada);
console.log("Array actualizado:", ciudades);


// ########################################
// ##### Ejercicio 4 - uso de unshift #####
// ########################################
// Agregar dos nuevas ciudades al inicio
ciudades.unshift("Berlín", "Lisboa");

// Mostrar el array actualizado
console.log("Array con nuevas ciudades al inicio:", ciudades);


// #######################################
// ##### Ejercicio 5 - uso de splice #####
// #######################################
// Crear un array de 6 colores
let colores = ["rojo", "azul", "verde", "amarillo", "morado", "naranja"];

// Eliminar dos elementos del medio e insertar dos colores diferentes
// Eliminamos "verde" y "amarillo" (índices 2 y 3)
colores.splice(2, 2, "cian", "magenta");
console.log("Array tras eliminar e insertar dos colores:", colores);

// Reemplazar solo un color por "negro" usando splice
// Reemplazamos "morado" (índice 4) por "negro"
colores.splice(4, 1, "negro");
console.log("Array tras reemplazar un color por negro:", colores);


// ######################################
// ##### Ejercicio 6 - uso de slice #####
// ######################################
// Crear un array de números del 1 al 8
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Obtener los 3 primeros números
let primerosTres = numeros.slice(0, 3);
console.log("Primeros 3 números:", primerosTres);

// Obtener los 3 últimos números
let ultimosTres = numeros.slice(-3);
console.log("Últimos 3 números:", ultimosTres);


// ###########################################
// ##### Ejercicio 7 - suma de precios #######
// ###########################################
// Crear un array con 5 precios de productos
let precios = [120, 55.5, 89, 230, 15.75];

// Calcular la suma total usando un for tradicional
let sumaTotal = 0;
for (let i = 0; i < precios.length; i++) {
	sumaTotal += precios[i];
}

// Mostrar la suma total
console.log("Suma total de precios:", sumaTotal);


// #############################################
// ##### Ejercicio 8 - foreach e IVA 19% #######
// #############################################
// Imprimir cada precio multiplicado por 1.19 (IVA 19%)
precios.forEach(function(precio, idx) {
	let precioConIVA = precio * 1.19;
	console.log(`Precio #${idx + 1} con IVA:`, precioConIVA.toFixed(2));
});


// #############################################
// ##### Ejercicio 9 - uso de map y descuento ##
// #############################################
// Crear un nuevo array con cada precio con 10% de descuento
let preciosConDescuento = precios.map(function(precio) {
	return Number((precio * 0.9).toFixed(1));
});

// Mostrar el array original y el nuevo
console.log("Array original de precios:", precios);
console.log("Array con 10% de descuento:", preciosConDescuento);


// #########################################################
// ##### Ejercicio 10 - reto de desarrollo de tareas ######
// #########################################################
// Crear un array de tareas pendientes
let tareas = ["leer", "escribir", "estudiar"];

// Agregar dos tareas con push
tareas.push("programar", "descansar");

// Eliminar la primera tarea con shift
tareas.shift();

// Insertar una tarea urgente en la posición 1
tareas.splice(1, 0, "tarea urgente");

// Generar un nuevo array con tareas de más de 5 caracteres
let tareasLargas = tareas.filter(function(tarea) {
	return tarea.length > 5;
});

// Mostrar resultados
console.log("Tareas actuales:", tareas);
console.log("Tareas con más de 5 caracteres:", tareasLargas);