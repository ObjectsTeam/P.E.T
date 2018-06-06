var mysql = require('mysql');
var http = require("http");
var querystring = require('querystring');
var url = require("url");
var mysql = require('mysql');
var data = 'peoplelist';
var result;
//注册账户
http.createServer(function(req, res) {
	data = req.url.slice(2).split(',');
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	var selectVip = 'SELECT * FROM userlist';
	var exist;
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			for(var i = 0; i < result.length; i++) {
				if(data[0] == result[i].username) {
					exist = true;
					res.writeHead(200, {
						"Content-Type": "text/plain",
						// res.writeHead(200, {"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET, POST"
					});
					res.end("0");
					break;
				} else {
					exist = false;
				}
			}
			if(!exist) {
				//创建sql服务
				var connection = mysql.createConnection({
					host: 'localhost',
					user: 'root',
					password: '123456lmz',
					port: '3306',
					database: 'front',
				});
				var addVip = 'insert into userlist(username,password) values(?,?)';
				var param = [data[0], data[1]];
				connection.query(addVip, param, function(err, result) {
					if(err) {
						console.log('[INSERT ERROR] - ', err.message);
					} else {
						console.log('--------------------------insert----------------------------');
						console.log('insert id: ' + result.insertId);
						console.log('------------------------------------------------------------\n\n');
						res.writeHead(200, {
							"Content-Type": "text/plain",
							// res.writeHead(200, {"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "GET, POST"
						});
						res.end("1");
					}
				});
			}
		}
	});
}).listen(8084, "127.0.0.1");

//改密码
http.createServer(function(req, res) {
	var data = req.url.slice(2).split(',');
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var userSql = "update userlist set password=" + data[0] + " where username=" + data[1];
	//	var param = [1000, 2];
	connection.query(userSql, function(error, result) {
		if(error) {
			console.log(error.message);
		} else {
			console.log('result: ' + result);
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end("1");
		}
	});
	connection.end(function() {

	});
}).listen(8085, "127.0.0.1");

//查询商品列表&&登录
http.createServer(function(req, res) {
	var data = req.url.slice(2).split(',');
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var selectVip;
	if(data.length == 1) {
		selectVip = 'SELECT * FROM ' + data[0];
	} else {
		selectVip = 'SELECT * FROM ' + data[0] + ' where username=' + data[1];
	}
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end(JSON.stringify(result));
		}
	});

}).listen(8090, "127.0.0.1");

//查询商品详细列表
http.createServer(function(req, res) {
	var data = req.url.slice(2);
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var selectVip = 'SELECT * FROM goodslist where id=' + data;
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end(JSON.stringify(result));
		}
	});

}).listen(8086, "127.0.0.1");

//添加购物车
http.createServer(function(req, res) {
	data = querystring.parse(req.url.slice(2),null,null);
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var seletcar = 'SELECT * FROM carlist where username='+data.username+' and name="'+data.name+'"';
	connection.query(seletcar, function(err, result) {
		console.log('rel:',result)
		if(result == "") {
			var selectVip = 'SELECT * FROM '+data.list+'list where id='+data.id
			connection.query(selectVip, function(err, result) {
				if(err) {
					console.log('[SELECT ERROR] - ', err.message);
				} else {
					console.log('--------------------------select1----------------------------');
					console.log(result);
					console.log('------------------------------------------------------------\n\n');
					res.writeHead(200, {
						"Content-Type": "text/plain",
						// res.writeHead(200, {"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET, POST"
					});
					var addVip = 'insert into carlist(id,username,name,price,num,img) values(?,?,?,?,?,?)';
					var param = [result[0].id, data.username, result[0].name, result[0].price, data.num, result[0].img];
					connection.query(addVip, param, function(err, result) {
						if(err) {
							console.log('[INSERT ERROR] - ', err.message);
						} else {
							console.log('--------------------------insert----------------------------');
							console.log(result);
							console.log('------------------------------------------------------------\n\n');
						}
						res.writeHead(200, {
							"Content-Type": "text/plain;charset=utf-8",
							// res.writeHead(200, {"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "GET, POST"
						});
						res.end('1');

					});
				}
			});
		} else {
			console.log('--------------------------select2----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			var addVip = 'update carlist set num=' + (new Number(result[0].num) + new Number(data.num)) + ' where username=' + data.username + ' and name="'+data.name+'"';
			connection.query(addVip, function(err, result) {
				if(err) {
					console.log('[INSERT ERROR] - ', err.message);
				} else {
					console.log('--------------------------update----------------------------');
					console.log(result);
					console.log('------------------------------------------------------------\n\n');
				}
				res.writeHead(200, {
					"Content-Type": "text/plain;charset=utf-8",
					// res.writeHead(200, {"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, POST"
				});
				res.end('1');

			});
		}
	});
}).listen(8087, "127.0.0.1");

//删除购物车
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var deleteVip = 'delete from carlist where username="' + data.username + '" and id=' + data.id + ' and name="' + data.name + '"';
	connection.query(deleteVip, function(error, result) {
		if(error) {
			console.log('[DELETE ERROR] - ', error.message);
		} else {
			console.log('--------------------------delete----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end("1");
		}
	});
}).listen(8088, "127.0.0.1");

//查看购物车
http.createServer(function(req, res) {
	var data = req.url.slice(2);
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var selectVip = 'SELECT * FROM carlist where username=' + data
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end(JSON.stringify(result));
		}
	});

}).listen(8089, "127.0.0.1");

//查询表
http.createServer(function(req, res) {
	var data = req.url.slice(2).split(',');
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var selectVip;
	if(data.length == 1) {
		selectVip = 'SELECT * FROM ' + data[0];
	} else {
		selectVip = 'SELECT * FROM ' + data[0] + ' where id=' + data[1];
	}
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end(JSON.stringify(result));
		}
	});

}).listen(8091, "127.0.0.1");

//发布信息
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	var selectVip = 'SELECT * FROM petlist'
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result.length);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			var addVip = 'insert into petlist (id,name,years,sex,img,text,phone) values(?,?,?,?,?,?,?)';
			var param = [result.length, data.name, data.years, data.sex, data.img, data.text, data.phone];
			connection.query(addVip, param, function(err, result) {
				if(err) {
					console.log('[INSERT ERROR] - ', err.message);
				} else {
					console.log('--------------------------insert----------------------------');
					console.log(result);
					console.log('------------------------------------------------------------\n\n');
					res.writeHead(200, {
						"Content-Type": "text/plain;charset=utf-8",
						// res.writeHead(200, {"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET, POST"
					});
					res.end('1');
				}
			});
		}
	});
}).listen(8092, "127.0.0.1");

//更改资料
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	var arr = Object.keys(data);
	console.log(data);
	console.log(arr);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	var selectVip = 'SELECT * FROM melist where user=' + data.user
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result.length);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			var updateVip;
			var param;
			if(result.length == 0) {
				updateVip = 'insert into melist (id,user,username,me,sex,birthDay,zhiye,school,city,home,email,text) values(?,?,?,?,?,?,?,?,?,?,?,?)';
				param = [result.length, data.user, data.username, data.me, data.sex, data.birthDay, data.zhiye, data.school, data.city, data.home, data.email, data.text];
				connection.query(updateVip, param, function(err, result) {
					if(err) {
						console.log('[INSERT ERROR] - ', err.message);
					} else {
						console.log('--------------------------insert----------------------------');
						console.log(result);
						console.log('------------------------------------------------------------\n\n');
						res.writeHead(200, {
							"Content-Type": "text/plain;charset=utf-8",
							// res.writeHead(200, {"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "GET, POST"
						});
						res.end('1');
					}
				});
			} else {
				for(var i = 0; i < arr.length; i++) {
					if(data[arr[i]] !== 'undefined') {
						updateVip = 'update melist set ' + arr[i] + '="' + data[arr[i]] + '" where user= ' + data.user;
						connection.query(updateVip, function(err, result) {
							if(err) {
								console.log('[UPDATE ERROR] - ', err.message);
							} else {
								console.log('--------------------------update----------------------------');
								console.log(result);
								console.log('------------------------------------------------------------\n\n');
								res.writeHead(200, {
									"Content-Type": "text/plain;charset=utf-8",
									// res.writeHead(200, {"Content-Type": "application/json",
									"Access-Control-Allow-Origin": "*",
									"Access-Control-Allow-Methods": "GET, POST"
								});
								res.end('1');
							}
						});
					}
				}
			}
		}
	});
}).listen(8093, "127.0.0.1");

//查看个人信息
http.createServer(function(req, res) {
	var data = req.url.slice(2).split(',');
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var selectVip = 'SELECT * FROM melist where user=' + data[0];
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end(JSON.stringify(result));
		}
	});

}).listen(8094, "127.0.0.1");

//查看表
http.createServer(function(req, res) {
	var data = req.url.slice(2).split(',');
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	var selectVip = 'SELECT * FROM ' + data[0] + ' where username=' + data[1]
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end(JSON.stringify(result));
		}
	});

}).listen(7000, "127.0.0.1");
//添加收货地址
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	var arr = Object.keys(data);
	console.log(data);
	console.log(arr);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.query("SELECT * FROM addresslist where username='" + data.username+"'", function(err, resul) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select1----------------------------');
			console.log(resul.length);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			var insertVip = 'insert into addresslist (id,username,address,phone,name) values(?,?,?,?,?)';
			var param = [resul.length, data['username'], data['address'], data['phone'], data['name']];
			connection.query(insertVip, param, function(err, result) {
				if(err) {
					console.log('[INSERT ERROR] - ', err.message);
				} else {
					console.log(data['username'])
					console.log(data['address'])
					console.log('--------------------------insert----------------------------');
					console.log(result);
					console.log('------------------------------------------------------------\n\n');
					res.writeHead(200, {
						"Content-Type": "text/plain;charset=utf-8",
						// res.writeHead(200, {"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET, POST"
					});
					res.end('1');
				}
			});
		}
	});
}).listen(8095, "127.0.0.1");

//更新收货地址
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	var arr = Object.keys(data);
	console.log(data);
	console.log(arr);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	for(var i = 0; i < arr.length; i++) {
		if(data[arr[i]] !== 'undefined') {
			var updateVip = 'update addresslist set ' + arr[i] + '="' + data[arr[i]] + '" where username= ' + data.username;
			connection.query(updateVip, function(err, result) {
				if(err) {
					console.log('[UPDATE ERROR] - ', err.message);
				} else {
					console.log('--------------------------update----------------------------');
					console.log(result);
					console.log('------------------------------------------------------------\n\n');
					res.writeHead(200, {
						"Content-Type": "text/plain;charset=utf-8",
						// res.writeHead(200, {"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET, POST"
					});
					res.end('1');
				}
			});
		}
	}
}).listen(8096, "127.0.0.1");

//删除收货地址
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	var arr = Object.keys(data);
	console.log(data);
	console.log(arr);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	var deleteVip = 'delete from collectlist where username="'+data.username+'" and id='+data.id;
	connection.query(deleteVip, function(error, result) {
		if(error) {
			console.log('[DELETE ERROR] - ', error.message);
		} else {
			console.log(deleteVip)
			console.log('--------------------------delete----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end("1");
		}
	});
}).listen(8099, "127.0.0.1");

//添加收藏
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	var arr = Object.keys(data);
	console.log(data);
	console.log(arr);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	var selectVip = 'SELECT * FROM '+data.list+'list where id='+data.id
	connection.query(selectVip, function(err, result) {
		if(err) {
			console.log('[SELECT ERROR] - ', err.message);
		} else {
			console.log('--------------------------select1----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain;charset:utf-8",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			connection.query("SELECT * FROM collectlist where username='" + data.username+"'", function(err, resul) {
				if(err) {
					console.log('[SELECT ERROR] - ', err.message);
				} else {
					console.log('--------------------------select2----------------------------');
					console.log(resul.length);
					console.log('------------------------------------------------------------\n\n');
					res.writeHead(200, {
						"Content-Type": "text/plain;charset:utf-8",
						// res.writeHead(200, {"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "GET, POST"
					});
					var exit;
					for(var i=0;i<resul.length;i++){
						if(resul[i].name == result[0].name){
							exit = true;
							res.writeHead(200, {
								"Content-Type": "text/plain;charset=utf-8",
								// res.writeHead(200, {"Content-Type": "application/json",
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Methods": "GET, POST"
							});
							res.end('0');
							break;
						}else{
							exit=false;
						}
					}
					if(!exit){
						var insertVip = 'insert into collectlist (id,username,name,price,img,text,num) values(?,?,?,?,?,?,?)';
						var param = [resul.length, data.username, result[0].name, result[0].price, result[0].img, result[0].text, result[0].num];
						connection.query(insertVip, param, function(err, result) {
							if(err) {
								console.log('[INSERT ERROR] - ', err.message);
							} else {
								res.writeHead(200, {
									"Content-Type": "text/plain;charset=utf-8",
									// res.writeHead(200, {"Content-Type": "application/json",
									"Access-Control-Allow-Origin": "*",
									"Access-Control-Allow-Methods": "GET, POST"
								});
								res.end('1');
							}
						});
					}
				}
			});
		}
	});
}).listen(8097, "127.0.0.1");

//管理收藏列表
http.createServer(function(req, res) {
	var data = querystring.parse(req.url.slice(2), null, null);
	console.log(data);
	//创建sql服务
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456lmz',
		port: '3306',
		database: 'front',
	});
	connection.connect(function(err) {
		if(err) {
			console.log("连接数据库失败");
		} else {
			console.log("连接数据库成功");
		}
	});
	var deleteVip = 'delete from collectlist where username="'+data.username+'" and name="'+data.name+'"';
	connection.query(deleteVip, function(error, result) {
		if(error) {
			console.log('[DELETE ERROR] - ', error.message);
		} else {
			console.log(deleteVip)
			console.log('--------------------------delete----------------------------');
			console.log(result);
			console.log('------------------------------------------------------------\n\n');
			res.writeHead(200, {
				"Content-Type": "text/plain",
				// res.writeHead(200, {"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST"
			});
			res.end("1");
		}
	});
}).listen(8098, "127.0.0.1");
console.log('start serve!');