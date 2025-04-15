exports.getAllUsers = (req, res) => {
    console.log(`Accediendo a todos los usuarios`)
    res.send(`Accediendo a todos los usuarios`)
}

exports.getUser = (req, res) => {
    console.log(req.query.enabled)
    console.log('Accediendo a usuario con id: ' + req.params.id)
    res.send('Accediendo a usuario con id: ' + req.params.id)
}

exports.createUser = (req, res) => {
    let data = req.body
    const { nombre, apellido, email, telefono} = data
    console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTelefono: ${telefono}\n`)
    res.send(data)
}

exports.updateUser = (req, res) => {
    let data = req.body
    const { nombre, apellido, email, telefono} = data
    console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTelefono: ${telefono}\n`)
    console.log(req.params.id)
    console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTelefono: ${telefono}\n`)
    res.send("Usuario: " + req.params.id)
}

exports.deleteUser = (req, res) => {
    console.log("Usuario " + req.params.id + " eliminado")
    res.send("Usuario: " + req.params.id + " eliminado")
}