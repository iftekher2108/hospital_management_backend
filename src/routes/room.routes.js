const router = require('express').Router();
const roomController = require('../controllers/room.controllers')

router.get('/', roomController.getRooms);
router.post('/',roomController.createRoom);
router.get('/',roomController.getRoomById);
router.put("/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
