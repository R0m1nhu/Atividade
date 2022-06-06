const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Atividade pré-avaliação!");
})

app.listen(port, () => {
    console.log('Rodando no site "Heroku", na porta 3000');
})