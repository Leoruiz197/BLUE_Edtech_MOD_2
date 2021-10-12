const express = require('express');
const app = express();
require('dotenv').config()
const db = require('./model/database');
const Cargo = require('./model/cargo');

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get('/', (req,res) => {
    res.json({messagem: "ola"})
});

app.get('/cargo', async (req,res) => {
    const cargo = await Cargo.findAll();
    res.json(cargo);
});

// console.log( typeof process.env.DB_PASS );
db.conectado();
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));