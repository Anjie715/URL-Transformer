// web server: 接受HTTP请求
// require相当于include
// require nodejs提供的http包
// npm install nodemon -g

/* var http = require('http');
var fs = require('fs'); */
// 建立一个server，用call back function， 当收到req，返回response
// 监听端口
// Ctrl + C -> end program
// /* http.createServer(function (req, res){
	
    // /* res.writeHead(200, {"Content-Type": "text-plain"});
	// //读取当前目录下的html文件
	// var html = fs.readFileSync(__dirname + "/index.html");
	// res.end(html); */
	// if(req.url === "/"){
		// res.writeHead(200, {"Content-Type": "text-plain"});
		// var html = fs.readFileSync(__dirname + "/index.html");
		// res.end(html);
	// }
	
	// if(req.url === "/api"){
		// res.writeHead(200, {"Content-Type": "application/json"});
		// var obj = {
			// name: "Anjie Zhao",
			// age: 12
		// };
		// res.end(JSON.stringify(obj));
	// }
    // // express架构	
	// // npm: node package management
	// // npm install express --save， 有--save其他人也可以运行
// }).listen(3000); */

var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/index');

/* // 如果是http的GET请求，并且是请求根目录
app.get("/", function(req, res){
	res.send("hello express world")
}); */

// express的routing功能
// 如果以/api/v1开头，访问xxx
app.use("/api/v1", restRouter);
// '/:'代表变量
app.use("/", indexRouter);
app.use("/:shortUrl", redirectRouter);

app.listen(3000);