const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;

const dbName = process.env.DB_NAME || "mydb";

console.log("[database] MONGO_URL =", uri);
console.log("[database] DB_NAME =", dbName);

const client = new MongoClient(uri);
const db = client.db(dbName);

module.exports = {
  db,
  client,
};