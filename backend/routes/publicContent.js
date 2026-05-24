const express = require('express');
const router = express.Router();
const { getPublicPage } = require('../controllers/contentController');

router.get('/:pageKey', getPublicPage);

module.exports = router;
