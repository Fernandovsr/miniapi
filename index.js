const express = require("express");
const app = express();

app.get("/aluno", (req, res )=> {
    let usuario = [{
                    nome: "Fernando Vinicius de Souza Rodrigues",
                    disciplina : "Topicos Especiais",
                    curso : "ADS Noite"
    },
        {
                    nome: "Fernando Rodrigues",
                    disciplina : "Topicos Especiais",
                    curso : "ADS Night"
    }]
    res.send(usuario)
}) ;

app.get("/professores", (req, res )=> {
    let professores  = [ {
                    nome: "David Reis",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    },
    {
        nome: "Alexandre Oliveira Garcia ",
        disciplina : "O danado do HASKELL",
        curso : "ADS"
}]
    res.send(professores);
}) ;


app.listen(3000, () => {
    console.log("funfando...");
})
