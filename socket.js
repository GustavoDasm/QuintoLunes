module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Se ha conectado a un nuevo cliente al servidor')
        socket.on('disconect', () => {
            console.log('El cliente se ha desconectado del servidor')
        })
    })
}