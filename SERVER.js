

const express = require("express");
const app = express();
const PORT = 8080;
const MEDIA_APROVACAO = 6;


app.use(express.json());

app.post("/alunos", (req, res) => {
    try {

        const { nome, notas } = req.body;


        if (!nome || !notas || notas.length === 0) {

            return res.status(400).json({
                erro: "Dados incompletos. Por favor, envie 'nome' e 'notas' (com pelo menos uma nota)."
            });
        }


        let somaNotas = 0;


        for (let i = 0; i < notas.length; i++) {

            somaNotas = somaNotas + notas[i];
        }

        const media = somaNotas / notas.length;


        const situacao = media >= MEDIA_APROVACAO ? 'APROVADO' : 'REPROVADO';


        const mediaFormatada = parseFloat(media.toFixed(2));

        res.status(201).json({
            nome: nome,
            media: mediaFormatada,
            situacao: situacao
        });

    } catch (error) {
        console.error("Erro ao processar a requisição:", error);
        res.status(500).json({
            erro: "Ocorreu um erro interno no servidor."
        });
    }
});


app.use((req, res) => {
    res.status(404).send(`pagina não encontrada!`)
})

app.listen(PORT, () => {
    console.log(`Rodando o servidor na porta: http://localhost:${PORT}`);
});

