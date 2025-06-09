const UserService = require('../services/userService')
const userService = new UserService()

exports.getAllUsers = async (req, res) => {
    try {
        const usuario = await userService.getAll();
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
}

exports.getUser = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = await userService.filterById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
}

exports.createUser = async (req, res) => {
    try {
        let data = req.body
        await userService.create(data)
        res.status(201).send({ message: 'Usuario creado', data })
    } catch (error) {
        res.status(500).json({ "error": error.message })    
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id
        let data = req.body
        const usuario = await userService.filterById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        await userService.update(id, data)
        res.status(201).send({ message: 'Usuario modificado', data })
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const usuario = await userService.filterById(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        await userService.delete(id)
        res.status(200).send({ message: 'Usuario borrado'})
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }
}