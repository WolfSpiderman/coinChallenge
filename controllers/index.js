const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
// This is a middleware function that logs the request URL
const logger = (req, res, next) => {
  console.log(`Request url: ${req.url}`);
  next();
}

router.use(logger); // Use the middleware function with use() method
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('randomTask');
});

router.get('/suggestions', (req, res) => {
    res.render('suggest');
});

module.exports = router;
