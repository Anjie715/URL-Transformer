var express = require('express');
var router = express.Router();
var urlServices = require('../services/urlService');
var path = require('path');

router.get("/", function(req, res){
	// 发送给客户端一个文件
	res.sendFile("index.html", {root: path.join(__dirname, '../public/views/')});
});

module.exports = router;