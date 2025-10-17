const express = require("express");
const fs=require('fs')
const app = express();
const PORT = 8080;

app.use(express.json());

function validarDados(pNome, pEmail, pSenha) {
    if (!pNome || typeof pNome !== `string`) {
        throw new Error("O nome tem que ser uma string não um numero!")
    }
    if (pNome.length < 3) {
        throw new Error("insira pelo menos 3 letras em seu nome!");
    }
    if (!pEmail || typeof pEmail !== `string` || !pEmail.includes("@")) {
        throw new Error("O email precisa ter @ para ser considerado ");

    }
    if (!pSenha || String(!pSenha).trim().length < 4) {
        throw new Error("Coloque no minimo 4 caracteres nessa senha");
    }

    return {
        "pNome": pNome,
        "pEmail": pEmail,
        "pSenha": pSenha
    };
}


function salvarRegistro(pUsuario) {
    const arquivo = `./usuarios.json`
    let usuarios = [];

    if (fs.existsSync(arquivo)) {
        const dadosArquivo = fs.readFileSync(arquivo, 'utf8');
        if (dadosArquivo) {
            usuarios = JSON.parse(dadosArquivo)
        }
    }
    usuarios.push(pUsuario)

    fs.writeFileSync(arquivo, JSON.stringify(usuarios, null, 2), 'utf8');
}


app.post('/usuarios', (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const { pNome, pEmail, pSenha } = validarDados(nome, email, senha)
        const novoUsuario = { nome: pNome, email: pEmail, senha: pSenha }
        salvarRegistro(novoUsuario)
        console.log(`Nome: ${pNome} \nE-mail: ${pEmail} \nSenha: ****`);
        res.status(201).json({
            result: "Login realizado com sucesso!",
            nome: pNome,
            email: pEmail,
            senha: "****"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ errorMessage: error.message })
    }
});






app.use((req, res) => {
    res.status(404).send(`pagina não encontrada!`)
})


app.listen(PORT, () => {
    console.log(` atividade 4 rodando em http://localhost:${PORT}`);
});













