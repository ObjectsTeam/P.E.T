var http = require("http");
var url = require("url");
var mysql  = require('mysql'); 
var sql = 'SELECT * FROM Active_List';
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
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
        }else{
//      	console.log('--------------------------select----------------------------');
//      	console.log(result);
//      	console.log('------------------------------------------------------------\n\n');  
        	//创建http服务
			http.createServer(function(req,res){
				 res.writeHead(200, {
			       "Content-Type": "text/plain",
			        // res.writeHead(200, {"Content-Type": "application/json",
			        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
			        "Access-Control-Allow-Methods": "GET, POST"
			    });
					res.end(JSON.stringify(result));
			}).listen(8080,"127.0.0.1");
//			console.log("start server!");
        }
});
connection.end(function(){
	console.log("数据库读取完毕！开启服务");
});

