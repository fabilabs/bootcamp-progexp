// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // Carpeta donde pondrás tu HTML/JS

let jugadores = [];

io.on('connection', (socket) => {
  console.log('Nuevo jugador conectado:', socket.id);

  socket.on('registrarJugador', nombre => {
    jugadores.push({ id: socket.id, nombre, puntaje: 0 });
    io.emit('ranking', jugadores);
  });

  socket.on('nivelCompletado', puntos => {
    const jugador = jugadores.find(j => j.id === socket.id);
    if (jugador) jugador.puntaje += puntos;
    io.emit('ranking', jugadores);
  });

  socket.on('disconnect', () => {
    jugadores = jugadores.filter(j => j.id !== socket.id);
    io.emit('ranking', jugadores);
  });
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
