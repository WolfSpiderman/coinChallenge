const router = require('express').Router();
const { Suggest } = require('../../models');

router.get('/whipple', async (req, res) => {
    try {
        const suggestData = await Suggest.findAll();
        res.status(200).json(suggestData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/whipple/apple/banana/nimrod', async (req, res) => {
    try {
        const suggestData = await Suggest.create(req.body);
        res.status(200).json(suggestData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;