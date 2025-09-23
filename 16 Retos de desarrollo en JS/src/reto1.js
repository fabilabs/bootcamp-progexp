// Array de estudiantes
const estudiantes = [
    { nombre: "Ana", edad: 20, calificaciones: [80, 75, 90] },
    { nombre: "Luis", edad: 22, calificaciones: [60, 65, 58] },
    { nombre: "María", edad: 19, calificaciones: [95, 92, 88] },
    { nombre: "Pedro", edad: 21, calificaciones: [55, 50, 45] },
];

// Función para calcular el promedio
function calcularPromedio(calificaciones) {
    return (
        calificaciones.reduce((acc, nota) => acc + nota, 0) / calificaciones.length
    );
}

// Función para determinar el estado académico
function estadoAcademico(promedio) {
    if (promedio >= 70) return "Aprobado";
    if (promedio >= 60) return "Recuperación";
    return "Reprobado";
}

// Función para encontrar mejor y peor estudiante
function mejorPeorEstudiante(estudiantes) {
    const ordenados = [...estudiantes].sort(
        (a, b) =>
        calcularPromedio(b.calificaciones) - calcularPromedio(a.calificaciones)
    );
    return {
        mejor: ordenados[0],
        peor: ordenados[ordenados.length - 1],
    };
}

// Función para generar reporte
function generarReporte(estudiantes) {
    console.log("=== Reporte de Estudiantes ===");
    estudiantes.forEach((est) => {
        const promedio = calcularPromedio(est.calificaciones);
        const estado = estadoAcademico(promedio);
        console.log(
        `Nombre: ${est.nombre}, Edad: ${est.edad}, Promedio: ${promedio.toFixed(
            2
        )}, Estado: ${estado}`
        );
    });
    const { mejor, peor } = mejorPeorEstudiante(estudiantes);
    console.log(
        `\nMejor estudiante: ${mejor.nombre} (Promedio: ${calcularPromedio(
        mejor.calificaciones
        ).toFixed(2)})`
    );
    console.log(
        `Peor estudiante: ${peor.nombre} (Promedio: ${calcularPromedio(
        peor.calificaciones
        ).toFixed(2)})`
    );
}

// Ejecutar reporte
generarReporte(estudiantes);
