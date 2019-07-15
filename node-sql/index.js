const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  port: '3306',
  database : 'myblog'
});
 
con.connect();
 
const sql = 'select * from users'
const sql2 = 'update users set realname="李四2" where username = "lisi"'
const sql3 = `INSERT INTO blogs VALUES (3, '标题3', '内容3', 1542512971224, 'lisi')`
con.query(sql3, (err, results) => {
  if (err) {
    console.log(err)
  }
  console.log('The solution is: ', results);
})

con.end()