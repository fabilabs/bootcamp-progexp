// =====================================================
// 1. CLASES - Concepto básico
// =====================================================

// Una clase es como un molde o plantilla para crear objetos
class Persona {
    // Esto es una clase vacía por ahora
}

console.log("=== EJEMPLO 1: CLASES ===");
console.log("Hemos creado la clase Persona");
console.log(Persona); // Muestra la definición de la clase

// =====================================================
// 2. OBJETOS - Instancias de una clase
// =====================================================

// Un objeto es una instancia específica de una clase
class Animal {
    // Clase simple para crear objetos
}

console.log("\n=== EJEMPLO 2: OBJETOS ===");
const perro = new Animal(); // Creamos un objeto de la clase Animal
const gato = new Animal();  // Creamos otro objeto de la misma clase

console.log("Objeto perro:", perro);
console.log("Objeto gato:", gato);
console.log("¿perro es instancia de Animal?", perro instanceof Animal); // true

// =====================================================
// 3. ATRIBUTOS - Propiedades de los objetos
// =====================================================

class Coche {
    constructor(marca, modelo, año) {
        // Estos son atributos (propiedades) del objeto
        this.marca = marca;   // atributo público
        this.modelo = modelo; // atributo público
        this.año = año;       // atributo público
        this.encendido = false; // atributo con valor por defecto
    }
}

console.log("\n=== EJEMPLO 3: ATRIBUTOS ===");
const miCoche = new Coche("Toyota", "Corolla", 2023);

console.log("Marca:", miCoche.marca);
console.log("Modelo:", miCoche.modelo);
console.log("Año:", miCoche.año);
console.log("¿Está encendido?", miCoche.encendido);

// Podemos modificar los atributos
miCoche.encendido = true;
console.log("Después de encender - ¿Está encendido?", miCoche.encendido);

// =====================================================
// 4. MÉTODOS - Funciones dentro de las clases
// =====================================================

class Calculadora {
    // Los métodos son funciones que pertenecen a la clase
    sumar(a, b) {
        return a + b;
    }
    
    restar(a, b) {
        return a - b;
    }
    
    multiplicar(a, b) {
        return a * b;
    }
    
    dividir(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    }
    
    // Método que no recibe parámetros
    obtenerInfo() {
        return "Soy una calculadora que puede hacer operaciones básicas";
    }
}

console.log("\n=== EJEMPLO 4: MÉTODOS ===");
const calc = new Calculadora();

console.log("Suma 5 + 3 =", calc.sumar(5, 3));
console.log("Resta 10 - 4 =", calc.restar(10, 4));
console.log("Multiplicación 6 * 7 =", calc.multiplicar(6, 7));
console.log("División 15 / 3 =", calc.dividir(15, 3));
console.log("División por cero 10 / 0 =", calc.dividir(10, 0));
console.log("Info:", calc.obtenerInfo());

// =====================================================
// 5. EJEMPLO COMPLETO - Integrando todo
// =====================================================

class Estudiante {
    // Constructor para inicializar atributos
    constructor(nombre, edad, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.notas = [];        // Array para almacenar notas
        this.activo = true;     // Estado del estudiante
    }
    
    // Método para agregar una nota
    agregarNota(nota) {
        if (nota >= 0 && nota <= 100) {
            this.notas.push(nota);
            console.log(`Nota ${nota} agregada a ${this.nombre}`);
        } else {
            console.log("Error: La nota debe estar entre 0 y 100");
        }
    }
    
    // Método para calcular el promedio
    calcularPromedio() {
        if (this.notas.length === 0) {
            return 0;
        }
        
        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }
    
    // Método para obtener el estado académico
    obtenerEstadoAcademico() {
        const promedio = this.calcularPromedio();
        
        if (promedio >= 70) {
            return "Aprobado";
        } else if (promedio >= 60) {
            return "En recuperación";
        } else {
            return "Reprobado";
        }
    }
    
    // Método para mostrar información completa
    mostrarInformacion() {
        console.log(`
=== INFORMACIÓN DEL ESTUDIANTE ===
Nombre: ${this.nombre}
Edad: ${this.edad} años
Carrera: ${this.carrera}
Notas: [${this.notas.join(', ')}]
Promedio: ${this.calcularPromedio().toFixed(2)}
Estado: ${this.obtenerEstadoAcademico()}
Estado de matrícula: ${this.activo ? 'Activo' : 'Inactivo'}
        `);
    }
    
    // Método para dar de baja al estudiante
    darDeBaja() {
        this.activo = false;
        console.log(`${this.nombre} ha sido dado de baja`);
    }
    
    // Método para reactivar al estudiante
    reactivar() {
        this.activo = true;
        console.log(`${this.nombre} ha sido reactivado`);
    }
    
    // Método estático (pertenece a la clase, no a la instancia)
    static compararPromedios(estudiante1, estudiante2) {
        const promedio1 = estudiante1.calcularPromedio();
        const promedio2 = estudiante2.calcularPromedio();
        
        if (promedio1 > promedio2) {
            return `${estudiante1.nombre} tiene mejor promedio (${promedio1.toFixed(2)}) que ${estudiante2.nombre} (${promedio2.toFixed(2)})`;
        } else if (promedio2 > promedio1) {
            return `${estudiante2.nombre} tiene mejor promedio (${promedio2.toFixed(2)}) que ${estudiante1.nombre} (${promedio1.toFixed(2)})`;
        } else {
            return `${estudiante1.nombre} y ${estudiante2.nombre} tienen el mismo promedio (${promedio1.toFixed(2)})`;
        }
    }
}

console.log("\n=== EJEMPLO 5: INTEGRANDO TODO ===");

// Creando objetos (instancias de la clase)
const estudiante1 = new Estudiante("Ana García", 20, "Ingeniería de Sistemas");
const estudiante2 = new Estudiante("Carlos López", 22, "Desarrollo Web");

// Usando métodos para agregar notas
estudiante1.agregarNota(85);
estudiante1.agregarNota(92);
estudiante1.agregarNota(78);
estudiante1.agregarNota(88);

estudiante2.agregarNota(75);
estudiante2.agregarNota(83);
estudiante2.agregarNota(90);

// Intentando agregar una nota inválida
estudiante1.agregarNota(105); // Esto mostrará un error

// Mostrando información completa
estudiante1.mostrarInformacion();
estudiante2.mostrarInformacion();

// Usando método estático para comparar
console.log(Estudiante.compararPromedios(estudiante1, estudiante2));

// Demostrando cambio de estado
estudiante2.darDeBaja();
estudiante2.mostrarInformacion();

estudiante2.reactivar();
console.log(`Estado actual de ${estudiante2.nombre}: ${estudiante2.activo ? 'Activo' : 'Inactivo'}`);

// =====================================================
// BONUS: Conceptos adicionales que puedes mencionar
// =====================================================

console.log("\n=== CONCEPTOS ADICIONALES ===");

// 1. Acceso a atributos desde métodos con 'this'
console.log("1. Accediendo a atributos con 'this':");
console.log(`El nombre del estudiante1 es: ${estudiante1.nombre}`);

// 2. Los objetos son referencias
console.log("\n2. Los objetos son referencias:");
const referenciaEstudiante = estudiante1;
referenciaEstudiante.edad = 21;
console.log(`Edad original: ${estudiante1.edad}`); // También cambió

// 3. Cada objeto tiene sus propios atributos
console.log("\n3. Cada objeto mantiene sus propios datos:");
console.log(`Notas de ${estudiante1.nombre}:`, estudiante1.notas);
console.log(`Notas de ${estudiante2.nombre}:`, estudiante2.notas);

console.log("\n=== FIN DE LOS EJEMPLOS ===");