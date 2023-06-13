const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('randomTask');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/suggestions', async (req, res) => {
    try {
        res.render('suggest');
    } catch (err) {
        res.status(500).json(err);
    }
})