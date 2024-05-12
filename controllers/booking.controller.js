const BookingModel = require('../models/booking.model');

class BookingController {
    async create(req, res) {
        // Gets current date
        let created_at = Date.now();
        let params = {...req.body, created_at, iduser: "1111"}

        const data = await BookingModel.create(params);
        return res.json(data);
    }

    async list(req, res) {
        const data = await BookingModel.find(req.body.id);
        return res.json(data);
    }
}

module.exports = new BookingController();
