var mysql  = require('mysql');  
 
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
 
var sql = 'SELECT * FROM Active_List';
var addVip = 'insert into Active_List(id,class) values(?,?)';
var param = [100,'100元秒杀家教机'];
//增
//connection.query(addVip, param,function (err, result) {
//      if(err){
//        console.log('[INSERT ERROR] - ',err.message);
//      }else{
//      	console.log('--------------------------insert----------------------------');
//      	console.log('insert id: '+result.insertId);
//			console.log(result);
//      	console.log('------------------------------------------------------------\n\n');  
//      }
// 
//});
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
        }else{
        	console.log('--------------------------select----------------------------');
        	console.log(result);
        	console.log('------------------------------------------------------------\n\n');  
        }
});
connection.end(function(){
	console.log("End a connection");
});