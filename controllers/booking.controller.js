const BookingModel = require('../models/booking.model');

class BookingController {
    async create(req, res) {
        const data = await BookingModel.create(req.body);
        return res.json(data);
    }

    async list(req, res) {
        const data = await BookingModel.find(req.body.id);
        return res.json(data);
    }
}

module.exports = new BookingController();
