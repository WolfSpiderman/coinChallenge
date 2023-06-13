const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', res.render('randomTask'));

router.get('/suggestions', res.render('suggest'));

module.exports = router;
