var connect = require('connect');
connect.creatServer(
	connect.static("D:\ABC\git\AngularJS")
).listen(5000);