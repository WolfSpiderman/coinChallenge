const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => res.render('randomTask'));

router.get('/suggestions', (req, res) => res.render('suggest'));

module.exports = router;
