const router = require('express').Router();

router.get('/', res.render('randomTask'));

router.get('/suggestions', res.render('suggest'));