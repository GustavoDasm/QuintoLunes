module.exports = (io) => {
    /*     io.on('connection', (socket) => {
            console.log('Se ha conectado a un nuevo cliente al servidor')
            socket.on('disconect', () => {
                console.log('El cliente se ha desconectado del servidor')
            })
        }) */

    let messages = [{ username: "fake-user", message: "welcome" }]

    io.on('connection', (socket) => {
        console.log("Un nuevo usuario conectado")
        io.emit('all-messages', messages)

        socket.on('writing', (username) => {
            socket.broadcast.emit('writing', username)
        })

        socket.on('new-message', (data) => {
            messages.push(data)
            io.emit('all-messages', messages)
        })

    })
}