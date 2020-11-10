// const path = require('path');
const express = require('express');
const router = express.Router();

const pemuktahiranController = require('../controllers/pemuktahiran');
const kkshilangController = require('../controllers/kksHilang');

router.post('/gantipengurus', pemuktahiranController.addPengurus);
router.post('/kks', kkshilangController.addKksHilang);

module.exports = router;
