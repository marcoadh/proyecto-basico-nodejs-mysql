import express from "express";
import { pool } from "./db.js";

import { PORT } from "./config.js";

const app = express()

app.get("/", (req, res) => {
  res.send("Hola");
})

app.get("/ping", async (req, res) => {
  const [result] = await pool.query(`SELECT "hola mundo" as Result`);
  res.json(result);
})

app.get("/users", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM users");
  res.json(result)
})

app.get("/create", async (req, res) => {
  const result = await pool.query('INSERT INTO users(name) VALUES ("Marco")')
  res.json(result)
})

app.listen(PORT);
console.log(`<============ Server on port ${PORT} ============>`);