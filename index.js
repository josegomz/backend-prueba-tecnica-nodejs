const express = require('express')
const mysql  = require('mysql')
const myconnection = require('express-myconnection')
const routesAlumno = require('./routes-alumno')
const routesMateria = require('./routes-materia')
const cors = require('cors')

const app = express()
//SE EJECUTA EN EL  PUERTO 80
app.set('port', process.env.PORT || 80)

const dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'escuela'
}

// MIDDLEWARES
app.use(myconnection(mysql,dbConfig, 'single'))
app.use(express.json())
app.use(cors())

// ROUTES
app.get('/', (req, res)=>{
    res.send('Bienvenido')
})
//ANOTHER ROUTES
app.use('/api/alumno', routesAlumno)
app.use('/api/materia', routesMateria)

app.listen(app.get('port'), ()=>{
    console.log('server running on port: ', app.get('port'))
})
