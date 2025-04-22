const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

const useRouter = require('./routers/userRouters')
const userLogin = require('./middlewares/userLogin')
const connectToDatabase = require('./database/connection')



app.get('/', (req, res) => {  
    const data = {
        "title":"Titulo de la pagina",
        "message":"Bienvenido a mi sitio web",
        "showMessage":true,
        "items":[1, 2, 3, 4, 5]
    }  
    res.render('index', data)
})

app.use(express.json())
app.use('/users', useRouter)

app.use(userLogin)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const port = 8080
app.listen(port, () => {
    console.log(`Aplicación con express ejecutandose en el puerto ${port}`)
})

