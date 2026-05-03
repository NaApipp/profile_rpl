import mysql from "mysql2/promise";

/**
 * db.ts
 * ----------
 * Database connection pool untuk website RPL.
 * 
 * Format: TypeScript
 */

// Database connection pool
const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT_NUMBER),
});

export default db;