// const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/addpeserta', adminController.postAddMaster);

router.get('/listkpm', adminController.getAllKpm);

module.exports = router;