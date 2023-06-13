const router = require('express').Router();
const suggestRoutes = require('./suggestController');

router.use('/suggestions', suggestRoutes);

module.exports = router;