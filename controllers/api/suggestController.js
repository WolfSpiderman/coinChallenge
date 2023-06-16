const router = require('express').Router();
const { where } = require('sequelize');
const { Suggest } = require('../../models');

router.get('/whipple', async (req, res) => {
    try {
        const suggestData = await Suggest.findAll();
        res.status(200).json(suggestData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/whipple', async (req, res) => {
    try {
        const suggestData = await Suggest.create(req.body);
        res.status(200).json(suggestData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.delete('/whipple/steveRogersCanWieldMjolnir/:id/', async (req, res) => {
//     try {
//         const suggestData = await Suggest.destroy({
//             where: { id: req.params.id }
//     });
//     if (!suggestData) {
//         res.status(404).json({ message: 'No suggestion with that ID exists, shit-for-brains.'});
//         return;
//     }
//     res.status(200).json({ message: `Successfully deleted: ${suggestData}!` });
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

module.exports = router;