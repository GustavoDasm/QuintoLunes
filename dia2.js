/* console.log("aaaaaaaaaaaaaaaaaaaa")
const showMessage = (message) =>{
    return message
}
console.log(showMessage('Hola como estas?')) */

/* var a = 2
if(a % 2 == 0){
    console.log("Es un numero Par")
}else{
    console.log("Es un numero Impar")
} */

/* var array = Array(1,2,3,4,5,6,7,8,9)

for(array1 of array){
    console.log(array1)
} */


    //-------------------------- DIA 2 --------------------------
/* const http = require('http')
const server = http.createServer((request, Response) => {
    if (request.url == '/' && request.method == 'GET') {
        Response.end(JSON.stringify({
            "message": "Accediendo al servidor"
        }))
    }
    if (request.url == '/a' && request.method == 'GET') {
        Response.end(JSON.stringify({
            "message": "Accediendo al aaaaaaaaaaaaaaa"
        }))
    }
}
)

const port = 8080
const host = "localhost"

server.listen(port, host, () => {
    console.log(`Servidor ejecutandose en://${host}:${port}`)
}) */

    function busquedaLineal(arr, elemento) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elemento) {
                return i
            }
        }
        return -1
    }
    
    const array1 = [4, 6, 8, 2, 1, 9, 5, 3, 12]
    const elementoBuscado = 4
    const indice = busquedaLineal(array1, elementoBuscado)
    console.log(`El elemento buscado ${elementoBuscado} se encuentra en el indice ${indice}`)