const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserController {
    async create(req, res) {
        //const data = await UserModel.create(req.body);
        let usr = new UserModel(req.body);
        usr.password = bcrypt.hashSync(req.body.password, 10);
        usr.save()
        .then((user) => {
            // remover la propiedad password de esta respuesta
            return res.status(200).send({ ok: true, message:  user});
        })
        .catch((err) => {
            return res.status(400).send({ ok: false, message:  err});
        })
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

        if (!result || !result.comparePassword(req.body.password)) {
            return res.status(401).json({ ok: false, message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ ok:true, token: jwt.sign({ email: result.email }, 'RESTFULAPIs') });
    }

    loginRequired(req, res, next) {
        if (req.user) {
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized user!!' });
        }
    }

    profile(req, res, next) {
        if (req.user) {
            res.send(req.user);
            next();
        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}

module.exports = new UserController();
