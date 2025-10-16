const express = require("express");
const app = express();
const PORT = 8080;


app.use(express.json());

function ValidaNumeros(pNumeros) {

    for (const numero of pNumeros) {


        const naoNumerico = pNumeros.find(item => typeof item !== `number`);


        if (naoNumerico !== undefined) {
            throw new Error("Não é um número. Todos os valores devem ser numéricos para o cálculo.");
        };
    }


    const resultado = pNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);
    return resultado;
}

app.post("/soma", (req, res) => {
    try {
        const { numeros } = req.body;
        const resultado = ValidaNumeros(numeros)
        console.log(`o resultado da soma é ${resultado}`);
        res.status(201).json({ result: `Dados recebidos com sucesso no servidor.` });
    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        res.status(500).json({
            error: "Ocorreu um erro interno no servidor."
        });
    }
});



app.use((req, res)=>{
    res.status(404).send(`pagina não encontrada!`)
})


app.listen(PORT, () => {
    console.log(`rodando em http://localhost:${PORT}`);
});



