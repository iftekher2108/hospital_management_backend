const Room = require('../models/Room.models');

exports.getRooms = async(req, res) => {
    try {
        const rooms = await Room.paginate({page: req.query.page || 1});
        res.status(200).json({ rooms })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.createRoom = async(req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json({ room });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.getRoomById = async(req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if(!room) return res.status(404).json({ message: "Room not found" })
        res.status(200).json({ room })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateRoom = async(req,res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new:true });
        res.status(200).json({ room })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteRoom = async(req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Room deleted successfully" })
    } catch (error) {

    }
}

