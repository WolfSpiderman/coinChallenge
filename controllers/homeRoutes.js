const router = require('express').Router();

router.get('/', (req, res) => res.render('randomTask'));

router.get('/suggestions', (req, res) => res.render('suggest'));