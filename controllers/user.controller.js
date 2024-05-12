const UserModel = require('../models/user');

class UserController {
    async create(req, res) {
        const data = await UserModel.create(req.body);
        return res.json(data);
    }

    async findId(req, res) {
        try {
            const data = await UserModel.findById(req.body.id);
            return res.json(data);
        } catch (error) {
            res.status(500).send({
                msg: error.message || 'Error al realizar la creacion de un usuario en base de datos',
            });
        }
    }

    async findUpdateId(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };

            const result = await Model.findByIdAndUpdate(id, updatedData, options);

            res.send(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async findDeleteId(req, res) {
        try {
            const id = req.params.id;
            const data = await Model.findByIdAndDelete(id);
            res.send(`Document with ${data.name} has been deleted..`);
        } catch (error) {
            res.status(400).json({ ok: false, msg: error.message });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        if (!email && !password) {
            return res.status(400).send({ ok: false, msg: 'Los campos son obligatorios' });
        }

        let result = await UserModel.findOne({ email: email });

        if (result == null) {
            return res.status(400).send({ ok: false, msg: 'Usuario no existe en base de datos' });
        }

        if (result.password == password) {
            return res.status(200).send({ ok: true, msg: 'Login exitoso' });
        } else {
            return res.status(400).send({ ok: false, msg: 'Login fallido' });
        }
    }
}

module.exports = new UserController();
