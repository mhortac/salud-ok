const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    iduser: { type: String, required: true },
    date: { type: Date, required: true },
    created_at: { type: Date, required: true },
    specialist: { type: String, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);
