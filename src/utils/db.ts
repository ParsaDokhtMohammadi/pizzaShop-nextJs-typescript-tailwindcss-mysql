import mysql from "mysql2/promise";

declare global {
  var _dbPool: mysql.Pool | undefined;
}

export const db =
  global._dbPool ||
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 100, // adjust as needed
    queueLimit: 0,
  });

if (process.env.NODE_ENV !== "production") {
  global._dbPool = db;
}
