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
 
//增
var addVip = 'insert into Active_List(id,class) values(?,?)';
var param = [100,'100元秒杀家教机'];
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

//删
//var addVip = 'delete from seckill where seckill_id = 1005';
//connection.query(addVip, function(error, result){
//  if(error)
//  {
//      console.log(error.message);
//  }else{
//      console.log('affectedRows: '+result.affectedRows);
//  }
//});
//
//connection.end();

//改
//var userSql = "update seckill set number = number-1 where seckill_id = ?";
//var param = [1000, 2];
//connection.query(userSql, param, function (error, result) {
//  if(error)
//  {
//      console.log(error.message);
//  }else{
//      console.log('affectedRows: '+result.affectedRows);
//  }
//});
//connection.end();

//查
var sql = 'SELECT * FROM Active_List';
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