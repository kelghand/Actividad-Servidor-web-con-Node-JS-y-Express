// server.js
// Servidor básico con Node.js y Express

const express = require('express')

const app = express()
const PUERTO = process.env.PORT || 3000

// Ruta principal: mensaje de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido/a a mi primer servidor con Node.js y Express!')
})

// Segunda ruta: información básica del proyecto
app.get('/proyecto', (req, res) => {
  res.json({
    nombre: 'Primer servidor web con Node.js y Express',
    autor: 'Khaled Ghandour Chemayse',
    descripcion:
      'Actividad académica que pone en práctica los conceptos básicos de desarrollo Back-End: creación de un servidor HTTP y manejo de rutas GET.',
    tecnologias: ['Node.js', 'Express'],
    fecha: new Date().toLocaleDateString('es-CO'),
  })
})

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})