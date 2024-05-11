const UserModel = require("../models/user");

class UserController {
    
    async create(req, res) {
        console.log(req);
        try {        
            const data = await UserModel.create(req.query);
            return res.json(data);
        } catch (error) {
            res.status(500).send({
                msg: error.message || "Error al realizar la creacion de un usuario en base de datos"
            });
        }        
    }

    async login(req, res) {
        let email = req.query.email;
        let password = req.query.password;

        console.log(req);

        if (!email && !password ){
            return res.status(200).send({msg: "Los campos son obligatorios"})
        }

        let result = await UserModel.findOne({email: email})

        if (result == null) {
            return res.status(400).send({msg: "Usuario no existe en base de datos"})
        }        
       
        if(result.password == password){
            return res.status(200).send({msg: "Login exitoso"})
        } else {
            return res.status(200).send({msg: "Login fallido"})
        }

    }

}

module.exports = new UserController();