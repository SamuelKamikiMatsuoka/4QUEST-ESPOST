const express = require("express");
const app = express();
const PORT = 8080;


app.use(express.json());


app.post("/soma", (req, res) => {
    try {
        const { numeros } = req.body;


        if (!Array.isArray(numeros) || numeros.length === 0) {
            return res.status(400).json({
                erro: "Dados inválidos. Por favor, envie um array de 'numeros'."
            });
        }


        const naoNumerico = numeros.find(item => typeof item !== `number`);

        if (naoNumerico == undefined) {

            return res.status(400).json({
                error: `O valor '${naoNumerico}' não é um número. Todos os valores devem ser numéricos para o cálculo.`
            });
        }


        const resultado = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

        res.status(200).json({
            soma: resultado
        });

    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        res.status(500).json({
            error: "Ocorreu um erro interno no servidor."
        });
    }
});

app.listen(PORT, () => {
    console.log(`rodando em http://localhost:${PORT}`);
});



