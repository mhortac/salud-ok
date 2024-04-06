const UserModel = require("../models/user");

class UserController {
    
    async create(req, res) {
        try {        
            const data = await UserModel.create(req.body);
            return res.json(data);
        } catch (error) {
            res.status(500).send({
                msg: error.message || "Error al realizar la creacion de un usuario en base de datos"
            });
        }        
    }
}

module.exports = new UserController();