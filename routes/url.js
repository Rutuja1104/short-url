const express = require('express');
const router = express.Router();
const{handleGenerateNewShortUrl,handleGetAnalystics} = require('../controllers/url')

router.post('/',handleGenerateNewShortUrl);

router.get('/analytics/:shortID',handleGetAnalystics)

module.exports= router;