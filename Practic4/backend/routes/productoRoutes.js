const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
