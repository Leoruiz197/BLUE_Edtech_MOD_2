const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public"))); 
require('dotenv').config()
const db = require('./model/database');
const Cargo = require('./model/cargo');

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const port = process.env.PORT;

app.get('/', (req,res) => {
    res.json({messagem: "ola"})
});

app.get('/cargo', async (req,res) => {
    const cargo = await Cargo.findAll();
    res.render("../view/cargo", {cargo: cargo});
});

app.get('/cargocriar', async (req,res) => {
    res.render("../view/cargocriar");
});

app.post('/cargocriar', async (req,res) =>{
    const { nome, descricao, setor} = req.body;
    const cargo = await Cargo.create({
        Nome:nome,
        Descriçao:descricao,
        Setor:setor,
    });
    res.redirect("/cargo");
});

app.get('/cargoeditar/:id', async (req,res) => {
    const cargo = await Cargo.findByPk(req.params.id);
    res.render("../view/cargoeditar", {cargo: cargo});
});

app.post('/cargoeditar/:id', async (req,res) =>{
    const cargo = await Cargo.findByPk(req.params.id);
    const { nome, descricao, setor} = req.body;
    
    cargo.Nome = nome;
    cargo.Descriçao = descricao;
    cargo.Setor = setor;

    await cargo.save();
    res.redirect("/cargo");
});

app.get('/cargodelete/:id', async (req,res) => {
    const cargo = await Cargo.findByPk(req.params.id);

    await cargo.destroy();

    res.redirect("/cargo");
});


db.conectado();
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));