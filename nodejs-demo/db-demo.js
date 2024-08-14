import mysql from 'mysql2/promise';

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password : 'root',
  database: 'ofs_db_batch08',
  port : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
// establishing connection >> call pool.getConnection() >> you can release using release()
let connection = await pool.getConnection();
// connection has execute(query, [parameter, parameter]): insert, update, select, delete
// let [result, fields] = await connection.execute
//         ("insert into employee(name, salary) values(?,?)", ["Brad", 45000])
// console.log(result);
// console.log(fields);
// using select query to get all the records
let [result, fields] = await connection.execute("select * from employee where id = ?",[100]);
console.log(result);
console.log("--------------------------------------------");
//console.log(fields);
// release the connection
connection.release();
pool.end(); // destroy the pool


