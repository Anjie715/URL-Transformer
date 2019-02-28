// handle REST api
var express = require('express');
var router = express.Router();
// npm install body-parser --save
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
// '..'回到上一级目录
var urlService = require('../services/urlService');

// POST请求+/urls
router.post("/urls", jsonParser, function(req, res){
	var longUrl = req.body.longUrl;
	var shortUrl = urlService.getShortUrl(longUrl);
	res.json({
		shortUrl: shortUrl,
		longUrl: longUrl
	});
});

// 类似于return
module.exports = router;