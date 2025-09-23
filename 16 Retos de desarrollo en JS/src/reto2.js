// Array de productos
const productos = [
    { id: 1, nombre: "Laptop", precio: 800, stock: 5, categoria: "Electrónica" },
    { id: 2, nombre: "Mouse", precio: 25, stock: 20, categoria: "Electrónica" },
    { id: 3, nombre: "Camiseta", precio: 15, stock: 30, categoria: "Ropa" },
    { id: 4, nombre: "Libro JS", precio: 40, stock: 10, categoria: "Libros" },
    { id: 5, nombre: "Zapatos", precio: 60, stock: 8, categoria: "Ropa" },
];

// Carrito de compras
let carrito = [];

// Mostrar productos por categoría
function mostrarPorCategoria(categoria) {
    const filtrados = productos.filter(p => p.categoria === categoria);
    console.log(`Productos en categoría '${categoria}':`);
    filtrados.forEach(p => {
        console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}, Stock: ${p.stock}`);
    });
}

// Buscar producto por nombre
function buscarProducto(nombre) {
    const resultado = productos.filter(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (resultado.length === 0) {
        console.log("No se encontró el producto.");
    } else {
        resultado.forEach(p => {
        console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}, Stock: ${p.stock}`);
        });
    }
}

// Agregar producto al carrito
function agregarAlCarrito(id, cantidad) {
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }
    if (producto.stock < cantidad) {
        console.log("Stock insuficiente.");
        return;
    }
    const enCarrito = carrito.find(item => item.id === id);
    if (enCarrito) {
        if (producto.stock < enCarrito.cantidad + cantidad) {
        console.log("Stock insuficiente para agregar más.");
        return;
        }
        enCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }
    console.log(`Agregado ${cantidad} x ${producto.nombre} al carrito.`);
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index === -1) {
        console.log("Producto no está en el carrito.");
        return;
    }
    console.log(`Eliminado ${carrito[index].nombre} del carrito.`);
    carrito.splice(index, 1);
}

// Calcular total con descuento
function calcularTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const descuento = total > 100 ? total * 0.1 : 0;
    const totalFinal = total - descuento;
    console.log(`Total: $${total.toFixed(2)}`);
    if (descuento > 0) {
        console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    }
    console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
    return totalFinal;
}

// Procesar compra
function procesarCompra() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }
    carrito.forEach(item => {
        const producto = productos.find(p => p.id === item.id);
        if (producto) {
        producto.stock -= item.cantidad;
        }
    });
    calcularTotal();
    carrito = [];
    console.log("Compra procesada. ¡Gracias por tu compra!");
}

// Ejemplo de uso
mostrarPorCategoria("Ropa");
buscarProducto("Laptop");
agregarAlCarrito(1, 1);
agregarAlCarrito(3, 2);
calcularTotal();
eliminarDelCarrito(3);
calcularTotal();
procesarCompra();
mostrarPorCategoria("Electrónica");
