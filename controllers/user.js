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
}

module.exports = new UserController();