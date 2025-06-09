const express = require('express')
const morgan = require('morgan')
const path = require('path')
const socket = require('socket.io')

const connectToDatabase = require('./database/connection')

const app = express()

const userRouter = require('./routers/userRouters')
const userLogin = require('./middlewares/userLogin')
const connectToDatabase = require('./database/connection')

/* app.get('/', (req, res) => {  
    const data = {
        "title":"Titulo de la pagina",
        "message":"Bienvenido a mi sitio web",
        "showMessage":true,
        "items":[1, 2, 3, 4, 5]
    }   
    res.render('index')
}) */

app.get('/', (req, res) => {
    res.render('index')
})

app.use(express.json())
app.use('/users', userRouter)

//app.use(userLogin)
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const server = require('http').createServer(app)
const io = socket(server)
require('./socket')(io)

const port = 8080
server.listen(port, () => {
    console.log(`Aplicación con express ejecutandose en el puerto http://localhost:${port}`)
    console.log(`http://localhost:${port}/socket.io/socket.io.js`)
})

