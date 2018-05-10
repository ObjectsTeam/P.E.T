var http = require("http");
var url = require("url");
var mysql  = require('mysql'); 
var data = 'peoplelist';
var result;
//创建http服务
http.createServer(function(req,res){
	//创建sql服务
	var connection = mysql.createConnection({     
	  host     : 'localhost',       
	  user     : 'root',              
	  password : '123456lmz',       
	  port: '3306',                   
	  database: 'pet', 
	}); 
	 
	connection.connect(function(err){
		if(err){
			console.log("连接数据库失败");
		}else{
			console.log("连接数据库成功");
		}
	});
	connection.query('SELECT * FROM '+data,function (err, resul) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	        }else{
	      	console.log('--------------------------select----------------------------');
	      	console.log(result);
	      	console.log('------------------------------------------------------------\n\n');  
	      	result = resul;
	        }
	});
	connection.end(function(){
//		console.log("数据库读取完毕！");
	});
		data = req.url.slice(2);
		console.log(data);
		req.on("data",function (dat) {
//			data = dat;
//			console.log(data);
		});
		req.on("end",function () {
        res.writeHead(200, {
            "Content-Type": "text/plain",
            // res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "GET, POST"
        });
        setTimeout(function () {
    		res.end(JSON.stringify(result));
        },200*Math.random());
		});
}).listen(8080,"127.0.0.1");
console.log('start serve!')
