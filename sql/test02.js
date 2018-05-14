var http = require("http");
var url = require("url");
var mysql  = require('mysql'); 
var data = 'peoplelist';
var result;
//创建http服务
http.createServer(function(req,res){
	data = req.url.slice(2);
	console.log(data);
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
	//查询表
	connection.query('SELECT * FROM '+data,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
        }else{
	      	console.log('--------------------------select----------------------------');
	      	console.log(result);
	      	console.log('------------------------------------------------------------\n\n');  
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
	    		res.end(JSON.stringify(result));
			});
        }
	});
	//添加数据
	var addVip = 'insert into userlist(username,passworld) values(?,?)';
	var param = [100,'100元秒杀家教机'];
	connection.query(addVip, param,function (err, result) {
	      if(err){
	        console.log('[INSERT ERROR] - ',err.message);
	      }else{
	      	console.log('--------------------------insert----------------------------');
	      	console.log('insert id: '+result.insertId);
				console.log(result);
	      	console.log('------------------------------------------------------------\n\n');  
	      }
	 
	});
	connection.end(function(){
		
	});
}).listen(8080,"127.0.0.1");
console.log('start serve!')
