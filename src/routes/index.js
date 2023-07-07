const express = require('express');
const todoRoutes = require('./todo.route');

const router = express.Router();

router.use('/todo', todoRoutes);

module.exports = router;
