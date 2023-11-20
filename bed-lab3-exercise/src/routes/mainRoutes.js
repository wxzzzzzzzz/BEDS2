const express = require('express');
const router = express.Router();
const playerRoutes = require('./playerRoutes');
router.use("/player", playerRoutes);
module.exports = router;