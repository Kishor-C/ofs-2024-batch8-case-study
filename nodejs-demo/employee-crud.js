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
// store
export async function save(employee) {
    let query = "insert into employee(name, salary) values(?,?)";
    // employee={name, salary}
    // caller uses then & catch or await save() to get the result
    return await connection.execute(query,[employee.name,employee.salary]); 
} 
// get all the records
export async function findAll() {
    let query = "select * from employee";
    return await connection.execute(query);
}   
