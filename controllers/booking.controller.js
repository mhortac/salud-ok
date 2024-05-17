const BookingModel = require('../models/booking.model');

class BookingController {
    async create(req, res) {
        if (!req.user) return res.status(401).json({ ok: false, message: 'Unauthorized user!!' });

        // Gets current date
        let created_at = Date.now();
        // TODO: CAMBIAR EL ID DEL USUARIO
        let params = { ...req.body, created_at, iduser: req.user._id };

        const data = await BookingModel.create(params);
        return res.status(200).send({ ok: true, data: data });
    }

    async list(req, res) {
        if (!req.user) return res.status(401).json({ ok: false, message: 'Unauthorized user!!' });

        const data = await BookingModel.find({ iduser: req.user._id });
        return res.json(data);
    }
}

module.exports = new BookingController();
